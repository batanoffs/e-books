import axios from 'axios'
import { API } from '../utils/constants/api'
import { getToken } from '../utils/helpers/auth'

const login = async (email: string, password: string) => {
	if (!email || !password) {
		throw new Error('Email and password are required')
	}

	try {
		const response = await axios.post(API.LOGIN, { email, password })
		const { token, redirectUrl, message } = response.data

		if (!token || !redirectUrl || !message) {
			throw new Error('Response token, redirectUrl or message is empty')
		}

		const currentToken = getToken()

		if (currentToken !== token) {
			document.cookie = `token=${token};`
			console.log('Token updated successfully.')
		} else {
			console.warn('Token is already up to date. Skipping...')
		}

		return { redirectUrl, message }
	} catch (error) {
		console.error('Login failed', error)
	}
}

const register = async (credentials: {
	email: string
	password: string
	repass: string
	// role: typeof process.env.ROLE
}) => {
	if (!credentials.email || !credentials.password) {
		throw new Error('Email and password are required')
	}

	try {
		const response = await axios.post(API.REGISTER, credentials)

		if (!response.data) throw new Error('Response data is empty')

		return response.data
	} catch (error) {
		console.error('Registration failed', error)
		throw error
	}
}

const logout = async () => {
	try {
		const response = await axios.get(API.LOGOUT)

		if (!response.data) throw new Error('Response data is empty')

		const { redirectUrl, message } = response.data
		document.cookie = 'token=;'

		return { redirectUrl, message }
	} catch (error) {
		console.error('Logout failed', error)
		throw error
	}
}

export const authService = {
	login,
	register,
	logout,
}
