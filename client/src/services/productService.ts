import axios from 'axios'

import API from '../utils/constants/api'
import { getToken } from '../utils/helpers/auth'

const getBooks = async (): Promise<any> => {
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

const getTextbooks = async (): Promise<any> => {
	//TODO
	try {
	} catch (error) {}
}

const getStationery = async (): Promise<any> => {
	//TODO
	try {
	} catch (error) {}
}

export const productService = {
	getBooks,
	getTextbooks,
	getStationery,
}
