import { Router } from 'express'
import categoryType from './categoriesType'

const router = Router()

router.use('/books', categoryType)
router.use('/textbooks', categoryType)
router.use('/stationery', categoryType)

export default router
