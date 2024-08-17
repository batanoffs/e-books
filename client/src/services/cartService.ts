import { API } from '../utils/constants/api'
import { getToken, getUserId } from '../utils/helpers/auth'
import axios from 'axios'

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

const addToCart = async (props: any, quantity: number, productType: string) => {
	try {
		const { _id } = props
		if (!_id) {
			throw new Error('Missing product data')
		}
		const userId = await getUserId()
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

export const cartService = { getCart, addToCart, removeOne, removeAll }
