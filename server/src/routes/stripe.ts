import { Router } from 'express'
import { checkoutSession, getPaymentSessionAndCreateOrder } from '../controllers/stripe'

const router = Router()

router.post('/create-checkout-session', checkoutSession)
router.get('/session-status', getPaymentSessionAndCreateOrder)

export default router
