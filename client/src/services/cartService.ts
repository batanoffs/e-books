import API from '../utils/constants/api'
import axios from 'axios'
import { getToken } from '../utils/helpers/auth'

const getCart = async (): Promise<any> => {
	try {
		const token = getToken()
		if (!token) {
			throw new Error('Client Not authorized!')
		}
		const { data } = await axios.get(API.CART, { withCredentials: true })
		if (!data) {
			throw new Error('Missing data')
		}
		return data
	} catch (error) {
		console.error(error)
		throw error
	}
}

const addMany = async (productId: string, productType: string, quantity: number) => {
	try {
		const token = getToken()
		if (!token) {
			throw new Error('Client Not authorized!')
		}
		if (!productId) {
			throw new Error('Missing product ID')
		}

		const data = {
			productId,
			productType,
			quantity,
		}
		await axios.post(API.CART, data, { withCredentials: true })
	} catch (error) {
		console.error(error)
		throw error
	}
}

const addOne = async (productId: string, productType: string) => {
	try {
		const token = getToken()
		if (!token) {
			throw new Error('Client Not authorized!')
		}
		if (!productId) {
			throw new Error('Missing product id')
		}

		const data = {
			productId,
			productType,
			quantity: 1,
		}

		await axios.post(API.CART, data, { withCredentials: true })
	} catch (error) {
		console.error(error)
		throw error
	}
}

const removeOne = async (productId: string) => {
	try {
		const token = getToken()
		if (!token) {
			throw new Error('Missing token')
		}
		const { data } = await axios.delete(API.CART + productId, {
			withCredentials: true,
			params: {
				productId,
			},
		})
		if (!data) {
			throw new Error('Missing data')
		}
		return data
	} catch (error) {
		console.error(error)
		throw error
	}
}

const removeAll = async () => {
	try {
		const token = getToken()
		if (!token) {
			throw new Error('Missing token')
		}
		const { data } = await axios.delete(API.CART, { withCredentials: true })
		if (!data) {
			throw new Error('Missing data')
		}
		return data
	} catch (error) {
		console.error(error)
		throw error
	}
}

const cartService = {
	getCart,
	addOne,
	addMany,
	removeOne,
	removeAll,
}

export default cartService
