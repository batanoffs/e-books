import { Router } from 'express'
import { createOrUpdateWishlist, deleteWishlist, getWishlist } from '../controllers/wishlist'
// import { session } from '../middlewares/session'

const router = Router()

router.post('/', createOrUpdateWishlist)
router.get('/', getWishlist)
router.delete('/:productId', deleteWishlist)

export default router
