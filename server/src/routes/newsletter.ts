import { Router } from 'express'
import { AddSubscriberToNewsLetter } from '../controllers/email'

const router = Router()

router.post('/newsletter', AddSubscriberToNewsLetter)

export default router
