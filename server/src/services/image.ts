import { Request } from 'express'
const cloudinary = require('../utils/cloudinary')

interface MulterRequest extends Request {
	file?: Express.Multer.File // To account for the file property added by multer
}

export const uploadImage = async (req: MulterRequest) => {
	return new Promise((resolve, reject) => {
		// Check if the file exists, otherwise throw an error
		if (!req.file) {
			throw new Error('No file uploaded')
		}
		cloudinary.uploader.upload(req.file.path, (err: Error, result: any) => {
			if (err) {
				return reject(err)
			}
			resolve(result)
		})
	})
}

// Upload an image
// const upload = async (file: any, productName: string, imagePath: any, folder: string) => {
// 	// Use the uploaded file's name as the asset's public ID and
// 	// allow overwriting the asset with new versions
// 	const options = {
// 		use_filename: true,
// 		unique_filename: false,
// 		overwrite: true,
// 		upload_preset: 'unsigned_upload',
// 		public_id: `${productName}cover`,
// 		folder: folder,
// 		allowed_formats: ['png', 'jpg', 'jpeg', 'svg', 'ico', 'jfif', 'webp'],
// 	}

// 	try {
// 		const result = await cloudinary.uploader.upload(imagePath, options)
// 		console.log(result)
// 		return result
// 	} catch (error) {
// 		console.error(error)
// 	}
// }

// Gets details of an uploaded image
const getAssetInfo = async (publicId: string) => {
	// Return colors in the response
	const options = {
		colors: true,
	}

	try {
		// Get details about the asset
		const result = await cloudinary.api.resource(publicId, options)
		console.log(result)
		return result.colors
	} catch (error) {
		console.error(error)
	}
}

// Optimize delivery by resizing and applying auto-format and auto-quality
const optimize = async () => {
	try {
		await cloudinary.url('shoes', {
			fetch_format: 'auto',
			quality: 'auto',
		})
	} catch (error) {
		console.log(error)
	}
}

// Transform the image: auto-crop to square aspect_ratio
const cropUrl = async () => {
	const autoCropUrl = cloudinary.url('shoes', {
		crop: 'auto',
		gravity: 'auto',
		width: 500,
		height: 500,
	})

	return autoCropUrl
}

export const imageService = {
	uploadImage,
	optimize,
	getAssetInfo,
	cropUrl,
}
