const express = require('express')

import bookRoutes from './book'
import orderRoutes from './order'
import userRoutes from './user'
import adminRoutes from './admin'
import authRoutes from './auth'
import textbookRoutes from './textbook'
import stationeryRoutes from './stationery'
import cartRoutes from './cart'
import featuredRoutes from './featured'
import stripeRoutes from './stripe'
import wishlistRoutes from './wishlist'
import categoryRoutes from './categories'
import newsLetterRoutes from './newsletter'

const router = express.Router()

router.use(authRoutes)
router.use('/books', bookRoutes)
router.use('/orders', orderRoutes)
router.use('/users', userRoutes)
router.use('/admin', adminRoutes)
router.use('/textbooks', textbookRoutes)
router.use('/stationery', stationeryRoutes)
router.use('/cart', cartRoutes)
router.use('/featured', featuredRoutes)
router.use('/checkout', stripeRoutes)
router.use('/wishlist', wishlistRoutes)
router.use('/categories', categoryRoutes)
router.use(newsLetterRoutes)


export default router
