import { Router } from 'express'
import categoryType from './categoriesType'
import { fetchAllTypesOfCategories } from '../controllers/categories'

const router = Router()

router.use('/books', categoryType)
router.use('/textbooks', categoryType)
router.use('/stationery', categoryType)

router.get('/', fetchAllTypesOfCategories)

export default router
