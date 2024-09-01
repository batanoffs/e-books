import { Router } from 'express'
import { addCategory, getAll } from '../controllers/categories'

const router = Router()

router.get('/', getAll)
router.post('/', addCategory)

export default router
