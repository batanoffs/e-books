import { Router } from 'express'
import { GetNewsletterSubscriber } from '../controllers/email'

const router = Router()

router.post('/newsletter', GetNewsletterSubscriber)

export default router
