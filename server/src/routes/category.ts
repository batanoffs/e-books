import { Router } from 'express'
import { addCategory, getCategoriesByType } from '../controllers/category'

const router = Router()

router.get('/', getCategoriesByType)
router.post('/', addCategory)

export default router
