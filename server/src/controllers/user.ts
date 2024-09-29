import { Request, Response, NextFunction } from 'express'
import User from '../models/User'
import { verifyToken } from '../services/jwt'

const getUsers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const users = await User.find()
		res.status(200).json(users)
	} catch (error) {
		res.status(500).json({ message: 'Error fetching users', error })
	}
}

const getUserByIdFromToken = async (
	req: Request,
	res: Response,
	next: NextFunction
): Promise<void> => {
	const token = req.headers.authorization?.split(' ')[1]

	if (!token) {
		res.status(401).json({ message: 'No token provided' })
		return
	}

	try {
		const decodedToken = verifyToken(token)
		const userId = decodedToken._id
		res.json({ userId })
	} catch (error) {
		res.status(401).json({ message: 'Invalid token' })
	}
}

const getUserById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	const { id } = req.params
	try {
		const user = await User.findById(id)
		if (!user) {
			res.status(404).json({ message: 'User not found' })
			return
		}
		res.status(200).json(user)
	} catch (error) {
		res.status(500).json({ message: 'Error fetching user', error })
	}
}

const updateUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	const { id } = req.params
	const { username, role } = req.body
	try {
		const user = await User.findByIdAndUpdate(id, { username, role }, { new: true })
		if (!user) {
			res.status(404).json({ message: 'User not found' })
			return
		}
		res.status(200).json(user)
	} catch (error) {
		res.status(500).json({ message: 'Error updating user', error })
	}
}

const deleteUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	const { id } = req.params
	try {
		const user = await User.findByIdAndDelete(id)
		if (!user) {
			res.status(404).json({ message: 'User not found' })
			return
		}
		res.status(200).json({ message: 'User deleted successfully' })
	} catch (error) {
		res.status(500).json({ message: 'Error deleting user', error })
	}
}

export { getUsers, getUserById, updateUser, deleteUser, getUserByIdFromToken }
