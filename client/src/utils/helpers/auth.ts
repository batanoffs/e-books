import authService from '../../services/authService'

const getToken = (): string | undefined => {
	const cookieName = 'token='
	const cookies = document.cookie.split(';')
	const tokenCookie = cookies.find((cookie) => cookie.trim().startsWith(cookieName))

	if (!tokenCookie) return undefined

	const token = tokenCookie.split('=')[1]

	if (!token || token === 'undefined' || token === 'null') return undefined

	return token
}

const checkIfUserIsAdmin = async () => {
	try {
		const userRole = await authService.getUserRole()
		return userRole === 'admin'
	} catch (error) {
		console.error('Error checking if user is admin:', error)
		return false
	}
}

export { getToken, checkIfUserIsAdmin }
