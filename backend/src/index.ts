import 'dotenv/config'
import express from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'
import cors from 'cors'
import { PrismaClient } from './generated/prisma'
import authRouter from './routes/auth'
import requestsRouter from './routes/requests'
import webhooksRouter from './routes/webhooks'
export const prisma = new PrismaClient()
export const app = express()
const httpServer = createServer(app)

export const io = new Server(httpServer, {
  cors: { origin: '*' }
})

app.use(cors())
app.use(express.json())
app.use('/auth', authRouter)
app.use('/requests', requestsRouter)
app.use('/webhooks', webhooksRouter)
app.get('/health', (req, res) => {
  res.json({ status: 'ok' })
})

io.on('connection', (socket) => {
  console.log('Admin connected:', socket.id)
  socket.on('disconnect', () => {
    console.log('Admin disconnected:', socket.id)
  })
})

const PORT = process.env.PORT || 3000
httpServer.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})