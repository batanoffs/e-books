import { Router } from 'express'
import {
	getUsers,
	getUserById,
	updateUser,
	deleteUser,
	getUserByIdFromToken,
} from '../controllers/user'

const router = Router()

router.get('/', getUsers)
router.get('/user-id', getUserByIdFromToken)
router.get('/:id', getUserById)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)

export default router
