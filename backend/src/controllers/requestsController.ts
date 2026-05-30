import { Request, Response } from 'express'
import { prisma } from '../index'
import { classificationQueue } from '../lib/queue'
import { io } from '../index'
import { AuthRequest } from '../middleware/auth'
import { z } from 'zod'

const createRequestSchema = z.object({
  message: z.string().min(1).max(5000),
  customerName: z.string().optional(),
  customerEmail: z.string().email().optional(),
  sourceChannel: z.string().default('api')
})

export const createRequest = async (req: Request, res: Response) => {
  const parsed = createRequestSchema.safeParse(req.body)
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.issues })
    return
  }

  try {
    const request = await prisma.customerRequest.create({
      data: {
        message: parsed.data.message,
        customerName: parsed.data.customerName,
        customerEmail: parsed.data.customerEmail,
        sourceChannel: parsed.data.sourceChannel,
        status: 'QUEUED'
      }
    })

    await prisma.requestEvent.create({
      data: {
        requestId: request.id,
        eventType: 'CREATED',
        newValue: 'QUEUED'
      }
    })

    await classificationQueue.add('classify', { requestId: request.id })

    io.emit('request:created', { requestId: request.id, status: 'QUEUED' })

    res.status(201).json(request)
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' })
  }
}

export const listRequests = async (req: Request, res: Response) => {
  const { status, priority, category, page = '1', limit = '20' } = req.query

  try {
    const where: any = {}
    if (status) where.status = status
    if (priority) where.prioritySnapshot = priority
    if (category) where.categorySnapshot = category

    const requests = await prisma.customerRequest.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      skip: (Number(page) - 1) * Number(limit),
      take: Number(limit),
      include: { classification: true }
    })

    const total = await prisma.customerRequest.count({ where })

    res.json({ requests, total, page: Number(page), limit: Number(limit) })
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' })
  }
}

export const getRequest = async (req: Request, res: Response) => {
  const id = req.params.id as string
  try {
    const request = await prisma.customerRequest.findUnique({
      where: { id },
      include: {
        classification: true,
        notes: {
          include: { author: { select: { email: true } } },
          orderBy: { createdAt: 'desc' }
        },
        events: { orderBy: { createdAt: 'asc' } }
      }
    })

    if (!request) {
      res.status(404).json({ error: 'Request not found' })
      return
    }

    res.json(request)
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' })
  }
}

export const updateStatus = async (req: AuthRequest, res: Response) => {
  const id = req.params.id as string
  const { status } = req.body

  const validStatuses = ['NEW', 'QUEUED', 'CLASSIFYING', 'CLASSIFIED', 'IN_PROGRESS', 'RESOLVED', 'FAILED']
  if (!validStatuses.includes(status)) {
    res.status(400).json({ error: 'Invalid status' })
    return
  }

  try {
    const existing = await prisma.customerRequest.findUnique({ where: { id } })
    if (!existing) {
      res.status(404).json({ error: 'Request not found' })
      return
    }

    const updated = await prisma.customerRequest.update({
      where: { id },
      data: { status }
    })

    await prisma.requestEvent.create({
      data: {
        requestId: id,
        eventType: 'STATUS_CHANGED',
        oldValue: existing.status,
        newValue: status,
        actorId: req.user?.id
      }
    })

    io.emit('request:updated', { requestId: id, status })

    res.json(updated)
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' })
  }
}

export const addNote = async (req: AuthRequest, res: Response) => {
 const id = req.params.id as string
  const { body } = req.body

  if (!body || body.trim() === '') {
    res.status(400).json({ error: 'Note body is required' })
    return
  }

  try {
    const note = await prisma.internalNote.create({
      data: {
        requestId: id,
        authorId: req.user!.id,
        body
      },
      include: { author: { select: { email: true } } }
    })

    res.status(201).json(note)
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' })
  }
}