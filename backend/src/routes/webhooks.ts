import { Router, Request, Response } from 'express'
import { prisma } from '../index'
import { classificationQueue } from '../lib/queue'
import { io } from '../index'

const router = Router()

router.post('/inbound', async (req: Request, res: Response) => {
  try {
    const { message, customerName, customerEmail, source } = req.body

    // Simulate webhook signature validation
    const webhookSecret = process.env.WEBHOOK_SECRET
    const signature = req.headers['x-webhook-signature']

    // In production: verify HMAC signature
    // const expectedSig = crypto.createHmac('sha256', webhookSecret).update(JSON.stringify(req.body)).digest('hex')
    // if (signature !== expectedSig) return res.status(401).json({ error: 'Invalid signature' })

    if (!message) {
      res.status(400).json({ error: 'Message is required' })
      return
    }

    const request = await prisma.customerRequest.create({
      data: {
        message,
        customerName: customerName || 'Unknown',
        customerEmail: customerEmail || null,
        sourceChannel: source || 'webhook',
        status: 'QUEUED'
      }
    })

    await prisma.requestEvent.create({
      data: {
        requestId: request.id,
        eventType: 'CREATED',
        newValue: 'QUEUED',
        metadata: { source: 'webhook' }
      }
    })

    await classificationQueue.add('classify', { requestId: request.id })
    io.emit('request:created', { requestId: request.id, status: 'QUEUED' })

    res.status(200).json({ received: true, requestId: request.id })
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' })
  }
})

export default router