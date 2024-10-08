import axios from 'axios'
import API from '../utils/constants/api'
import { useNotify } from 'react-admin'

const uploadImage = async (file: File) => {
	const formData = new FormData()
	const notify = useNotify()
	formData.append('picture', file)

	try {
		const response = await axios.post(API.BOOKS + 'upload', formData, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		})

		notify('Успешно качихте или променихте изображението', { type: 'success' })
		const { secure_url } = response.data.data
		return secure_url
	} catch (error) {
		notify(`Грешка при качване на изображението ${error}`, { type: 'error' })
	}
}

export const imageService = {
	uploadImage,
}
