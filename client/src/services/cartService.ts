import { API } from '../utils/constants/api'
import { getToken, getUserId } from '../utils/helpers/auth'
import axios from 'axios'

const getCart = async () => {
	try {
		const { data } = await axios.get(`${API.CART}`, {
			headers: {
				Authorization: `Bearer ${getToken()}`,
			},
		})
		return data
	} catch (error) {
		console.log(error)
	}
}

const addToCart = async (props: any, quantity: number, productType: string) => {
	const { _id, price, title, coverImagePath } = props
	if (!_id || !price || !title || coverImagePath) return new Error('Missing product data')
        
    const userId = await getUserId()
	if (!userId) return

	const data = {
		userId,
		productId: _id,
		productImage: coverImagePath,
		quantity,
		name: title,
		price: price,
		productType,
	}
	try {
		await axios.post(API.CART, data)
	} catch (error) {
		console.log(error)
	}
}

const removeOne = async (id: string) => {
	try {
		const { data } = await axios.delete(`${API.CART}/${id}`, {
			headers: {
				Authorization: `Bearer ${getToken()}`,
			},
		})
		return data
	} catch (error) {
		console.log(error)
	}
}

const removeAll = async () => {
	try {
		const { data } = await axios.delete(`${API.CART}`, {
			headers: {
				Authorization: `Bearer ${getToken()}`,
			},
		})
		return data
	} catch (error) {
		console.log(error)
	}
}

export const cartService = { getCart, addToCart, removeOne, removeAll }
