import { Router } from 'express'
import { body } from 'express-validator'
import validateRequest from '../middlewares/validateRequest'
import { checkoutSession, getPaymentSessionStatus } from '../controllers/stripe'

const router = Router()

router.post('/create-checkout-session', checkoutSession)

router.get('/session-status', getPaymentSessionStatus)

export default router
