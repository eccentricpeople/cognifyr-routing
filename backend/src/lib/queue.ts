import { Queue } from 'bullmq'
import { redis } from './redis'

export const classificationQueue = new Queue('classification', {
  connection: redis
})