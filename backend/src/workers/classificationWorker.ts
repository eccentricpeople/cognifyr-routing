import 'dotenv/config'
import { Worker } from 'bullmq'
import { PrismaClient } from '../generated/prisma'
import { redis } from '../lib/redis'
import { classify } from '../ai/mockProvider'

const prisma = new PrismaClient()

const worker = new Worker('classification', async (job) => {
  const { requestId } = job.data
  console.log('Processing: ' + requestId)

  try {
    const request = await prisma.customerRequest.findUnique({
      where: { id: requestId }
    })

    if (!request) throw new Error('Request not found')

    await prisma.customerRequest.update({
      where: { id: requestId },
      data: { status: 'CLASSIFYING' }
    })

    const result = await classify(request.message)

    await prisma.aiClassification.create({
      data: {
        requestId,
        provider: 'mock',
        category: result.category.toUpperCase() as any,
        priority: result.priority.toUpperCase() as any,
        summary: result.summary,
        confidence: result.confidence,
        reason: result.reason,
        rawOutput: result as any
      }
    })

    await prisma.customerRequest.update({
      where: { id: requestId },
      data: {
        status: 'CLASSIFIED',
        categorySnapshot: result.category.toUpperCase() as any,
        prioritySnapshot: result.priority.toUpperCase() as any
      }
    })

    await prisma.requestEvent.create({
      data: {
        requestId,
        eventType: 'CLASSIFIED',
        newValue: result.category,
        metadata: { priority: result.priority, confidence: result.confidence }
      }
    })

    console.log('Done: ' + requestId)

  } catch (err) {
    console.error('Failed: ' + requestId, err)

    await prisma.aiClassification.upsert({
      where: { requestId },
      update: { error: String(err) },
      create: {
        requestId,
        provider: 'mock',
        error: String(err)
      }
    })

    await prisma.customerRequest.update({
      where: { id: requestId },
      data: { status: 'FAILED' }
    })

    throw err
  }

}, { connection: redis })

worker.on('completed', (job) => {
  console.log('Job completed: ' + job.id)
})

worker.on('failed', (job, err) => {
  console.error('Job failed: ' + job?.id, err)
})

console.log('Classification worker started')