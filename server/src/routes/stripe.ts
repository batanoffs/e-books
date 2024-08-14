import { Router } from 'express'
import { checkoutSession } from '../controllers/stripe'

const router = Router()

router.post('/create-checkout-session', checkoutSession)

// router.get('/session-status', getPaymentSessionStatus)

export default router
