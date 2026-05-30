import { Router } from 'express'
import { login } from '../controllers/authController'
import rateLimit from 'express-rate-limit'

const router = Router()

const loginLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 10,
  message: { error: 'Too many login attempts' }
})

router.post('/login', loginLimiter, login)

export default router