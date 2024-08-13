import { Router } from 'express'
import { checkoutSession, getPaymentSessionStatus } from '../controllers/stripe'

const router = Router()

router.post('/create-checkout-session', checkoutSession)

router.get('/session-status', getPaymentSessionStatus)

export default router
