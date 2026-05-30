import { Router } from 'express'
import { authenticate } from '../middleware/auth'
import {
  createRequest,
  listRequests,
  getRequest,
  updateStatus,
  addNote
} from '../controllers/requestsController'

const router = Router()

router.post('/', createRequest)
router.get('/', authenticate, listRequests)
router.get('/:id', authenticate, getRequest)
router.patch('/:id/status', authenticate, updateStatus)
router.post('/:id/notes', authenticate, addNote)

export default router