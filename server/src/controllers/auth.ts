const { validationResult } = require('express-validator')

import { Request, Response } from 'express-serve-static-core'
import { createToken } from '../services/jwt'
import { loginUser, registerUser } from '../services/user'

const register = async (req: Request, res: Response) => {
	const { email, password, repass, role } = req.body
	console.log('Request body', req.body)
	try {
		const validation = validationResult(req)

		if (validation.errors.length) {
			return res.status(400).json({ errors: validation.errors.all() })
		}

		if (password !== repass) {
			return res.status(400).json({ error: 'Passwords do not match' })
		}

		let userRoleCheck = role
		if (!role || role === '') {
			userRoleCheck = 'user'
		}

		if (role === 'admin') {
			userRoleCheck = 'admin'
		}

		if (role && role !== 'admin') {
			return res.status(400).json({ error: 'Invalid role' })
		}

		console.log('userRoleCheck', userRoleCheck)

		const user = await registerUser(email, password, userRoleCheck)

		const token = createToken(user)
		console.log('token', token)

		res.cookie('token', token, {
			httpOnly: true,
			secure: process.env.NODE_ENV === 'production',
			sameSite: 'strict',
			maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
			path: user.role === 'admin' ? '/admin' : '/', // restrict cookie to specific path
		})

		const redirectUrl = user.role === 'admin' ? '/admin' : '/'
		return res.status(200).json({ message: 'Регистрацията е успешна!', token, redirectUrl })
	} catch (error) {
		return res.status(500).json({ message: 'Регистрацията е неуспешна', error })
	}
}

const login = async (req: Request, res: Response) => {
	const { email, password } = req.body

	try {
		const validation = validationResult(req)

		if (validation.errors.length) {
			throw validation.errors
		}

		const user = await loginUser(email, password)
		const token = createToken(user)

		res.cookie('token', token, {
			httpOnly: true,
			secure: process.env.NODE_ENV === 'production',
			sameSite: 'strict',
			maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
			path: user.role === 'admin' ? '/admin' : '/', // restrict cookie to specific path
		})

		const redirectUrl = user.role === 'admin' ? '/admin' : '/'

		res.status(200).json({ message: 'Успешно влизане в профила си!', token, redirectUrl })
	} catch (error) {
		res.status(500).json({ message: 'Възникна грешка при вход', error })
	}
}

const logout = (req: Request, res: Response) => {
	const redirectUrl = '/'

	res.clearCookie('token', {
		httpOnly: true,
		secure: process.env.NODE_ENV === 'production',
		sameSite: 'strict',
		path: '/', // restrict cookie to specific path
	})

	res.status(200).json({ message: 'Усшено излязохте от профила', redirectUrl })
}

export { register, login, logout }
