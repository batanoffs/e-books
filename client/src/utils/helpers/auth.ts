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
	const cookieName = 'token='
	const cookies = document.cookie.split(';')
	const tokenCookie = cookies.find((cookie) => cookie.trim().startsWith(cookieName))

	if (!tokenCookie) return undefined

	const token = tokenCookie.split('=')[1]

	if (!token || token === 'undefined' || token === 'null') return undefined

	return token
}

const getUserRole = async () => {
	try {
		const token = getToken()
		const response = await axios.get(API.USERS, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
		const userRole = response.data.role
		if (!userRole) return new Error('User role not found')

		return userRole
	} catch (error) {
		console.error('Error fetching user Role:', error)
	}
}

const getUserId = async () => {
	try {
		const token = getToken()

		const responseFromUser = await axios.get(API.USER_ID, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
		const userId = responseFromUser.data.userId
		if (!userId) return new Error('User ID not found')
		return userId
	} catch (error) {
		console.error('Error fetching user ID:', error)
	}
}

const checkIfUserIsAdmin = async () => {
	try {
		const userRole = await getUserRole()
		return userRole === 'admin'
	} catch (error) {
		console.error('Error checking if user is admin:', error)
		return false
	}
}

export { isGuest, isAuth, getToken, checkIfUserIsAdmin, getUserId, getUserRole }
