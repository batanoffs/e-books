import axios from 'axios'
import API from '../utils/constants/api'

const getAll = async () => {
	try {
		const response = await axios.get(API.WISHLIST, { withCredentials: true })
		return response.data
	} catch (error) {
		console.error(error)
	}
}

const add = async (productId: string) => {
	if (!productId) throw new Error('Missing product id')
	const data = {
		productId: productId,
	}
	try {
		const response = await axios.post(API.WISHLIST, data, {
			withCredentials: true,
		})
		if (response.status !== 200) throw new Error('Error adding product to wishlist')
		return response.data
	} catch (error) {
		console.error(error as Error)
	}
}

const removeOne = async (productId: string) => {
	try {
		await axios.delete(API.WISHLIST + productId, { withCredentials: true })
	} catch (error) {
		console.error(error as Error)
	}
}

const removeAll = async () => {
	try {
		await axios.delete(API.WISHLIST, { withCredentials: true })
	} catch (error) {
		console.error(error as Error)
	}
}

const wishlistService = {
	getAll,
	add,
	removeOne,
	removeAll,
}

export default wishlistService
