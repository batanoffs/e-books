import axios from 'axios'
import API from '../utils/constants/api'

const uploadImage = async (file: File) => {
	const formData = new FormData()
	formData.append('picture', file)

	try {
		const response = await axios.post(API.BOOKS + 'upload', formData, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		})

		console.log('File uploaded successfully', response.data)

		const { secure_url } = response.data.data
		return secure_url
	} catch (error) {
		console.error('Error uploading the file', error)
	}
}

export const imageService = {
	uploadImage,
}
