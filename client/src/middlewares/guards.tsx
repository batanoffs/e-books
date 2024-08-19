import { Navigate } from 'react-router-dom'

import { checkIfUserIsAdmin, getToken } from '../utils/helpers/auth'
import AdminPage from '../pages/ReactAdmin/Admin'

const AdminGuard = () => {
	const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, '$1')

	const isAdmin = checkIfUserIsAdmin() // Function to check if the user is an admin, you need to implement this

	if (!token || !isAdmin) {
		return <Navigate to='/login' />
	}

	return <AdminPage />
}

const isGuest = (): boolean => {
	const token = getToken()
	return !token
}

const isAuth = (): boolean => {
	return !isGuest()
}

const authGuards = {
	AdminGuard,
	isGuest,
	isAuth,
}

export default authGuards
