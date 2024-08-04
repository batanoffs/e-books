import axios from 'axios'
import { API } from '../constants/api'

const isGuest = (): boolean => {
	const token = getToken()
	return !token
}

const isAuth = (): boolean => {
	return !isGuest()
}

const getToken = (): string | undefined => {
	const SearchTokenCookie = document.cookie
		.split(';')
		.map((cookie) => cookie.trim())
		.find((cookie) => cookie.startsWith('token='))

	if (!SearchTokenCookie) {
		console.error('No token found in cookies')
		return
	}

	const token = SearchTokenCookie.split('=')[1]

	if (!token || token === 'undefined' || token === 'null') {
		console.error('Invalid token found in cookies')
		return
	}

	return token
}

const getUserRole = async () => {
	const token = getToken()
	if (!token) {
		console.error('No token found in cookies')
		return
	}
	try {
		const responseFromUser = await axios.get(API.USERS, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
		const userRole = responseFromUser.data.role

		console.log('User Role:', userRole)

		return userRole
	} catch (error) {
		console.error('Error fetching user ID:', error)
	}
}

const getUserId = async () => {
	const token = getToken()
	if (!token) return new Error('No token found in cookies')

	try {
		const responseFromUser = await axios.get(API.USER_ID, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
		const userId = responseFromUser.data.userId

		console.log('User ID:', userId)

		return userId
	} catch (error) {
		console.error('Error fetching user ID:', error)
	}
}

const checkIfUserIsAdmin = () => {
	const userRole = getUserRole() // Get user role

	// Check if user has admin role
	if (!userRole) {
		return false
	}
	return true
}

export { isGuest, isAuth, getToken, checkIfUserIsAdmin, getUserId, getUserRole }
