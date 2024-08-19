import API from '../utils/constants/api'
import axios from 'axios'
import { getToken } from '../utils/helpers/auth'
import authService from './authService'

const getCart = async (): Promise<any> => {
	try {
		const token = getToken()
		if (!token) {
			throw new Error('Missing token')
		}
		const { data } = await axios.get(API.CART, {
			headers: {
				Authorization: `Bearer ${token}`,
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

const addMany = async (props: any, quantity: number) => {
	// productType: string
	try {
		const { _id } = props
		if (!_id) {
			throw new Error('Missing product data')
		}
		const userId = await authService.getUserId()
		if (!userId) {
			throw new Error('Missing userId')
		}
		const token = getToken()
		if (!token) {
			throw new Error('Missing token')
		}
		const data = {
			userId,
			productId: _id,
			quantity,
			// productId: _id,
			// productImage: coverImage,
			// productImageType: coverImageType,
			// name: title,
			// price,
			// productType,
		}
		await axios.post(API.CART, data, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
	} catch (error) {
		console.error(error)
		throw error
	}
}

const addOne = async (productId: string) => {
	try {
		if (!productId) {
			throw new Error('Missing product id')
		}
		const userId = await authService.getUserId()
		if (!userId) {
			throw new Error('Missing userId')
		}
		const token = getToken()
		if (!token) {
			throw new Error('Missing token')
		}
		const data = {
			userId,
			productId: productId,
			quantity: 1,
		}
		await axios.post(API.CART, data, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
	} catch (error) {
		console.error(error)
		throw error
	}
}

const removeOne = async (productId: string, userId: string) => {
	try {
		const token = getToken()
		if (!token) {
			throw new Error('Missing token')
		}
		const { data } = await axios.delete(API.CART + productId, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
			params: {
				userId,
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

const removeAll = async (userId: string) => {
	try {
		const token = getToken()
		if (!token) {
			throw new Error('Missing token')
		}
		const { data } = await axios.delete(API.CART, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
			params: {
				userId,
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

const cartService = {
	getCart,
	addOne,
	addMany,
	removeOne,
	removeAll,
}

export default cartService
