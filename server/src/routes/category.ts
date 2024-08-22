import { Router } from 'express'
import { addCategory, getAll, getCategoriesByType } from '../controllers/category'

const router = Router()

router.get('/', getAll)
router.get('/:type', getCategoriesByType)
router.post('/', addCategory)

export default router
