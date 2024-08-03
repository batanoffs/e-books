import { Router } from 'express'
import { addToCart, getCart, removeProductFromCart, clearCart } from '../controllers/cart'

const router = Router()

router.post('/', addToCart)
router.get('/:userId', getCart)
router.delete('/:productId', removeProductFromCart)
router.delete('/', clearCart)

export default router
