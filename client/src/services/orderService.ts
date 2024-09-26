import axios from 'axios'
import API from '../utils/constants/api'
import { getToken } from '../utils/helpers/auth'

const getUserOrders = async (): Promise<any> => {
	try {
		const token = getToken()
		if (!token) {
			throw new Error('Missing token')
		}
		const response = await axios.get(API.ORDERS, {
			withCredentials: true,
		})
		if (!response || !response.data) {
			throw new Error('Missing data')
		}
		return response
	} catch (error) {
		console.error(error)
		throw error
	}
}

export const orderService = {
	getUserOrders,
}
