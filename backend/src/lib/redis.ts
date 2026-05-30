import IORedis from 'bullmq/node_modules/ioredis'

export const redis = new IORedis(process.env.REDIS_URL || 'redis://localhost:6379', {
  maxRetriesPerRequest: null
})