// import { IBookSchema } from '../../interfaces/book.interface'
// import { imageService } from '../../services/image'

// export const saveCover = async (file: any, title: string) => {
// 	if (!file || !title) return new Error('No file or title provided')

// 	try {
// 		const response = await imageService.upload(file, title, file.path, 'bookCovers')

// 		if (response && response.ok) {
// 			const { url, publicId } = response.data
// 			return { url, publicId }
// 		} else {
// 			return { url: '', publicId: '' }
// 		}
// 	} catch (error) {
// 		console.error(error)
// 		return { url: '', publicId: '' }
// 	}
// }

// const imageMimeTypes = ['image/jpeg', 'image/png', 'image/gif'] // Update if needed

// export default function saveCover(body: IBookSchema, coverEncoded: string) {
// 	if (coverEncoded.length > 0) {
// 		const cover = JSON.parse(coverEncoded)
// 		if (cover && imageMimeTypes.includes(cover.type)) {
// 			body.coverImage = Buffer.from(cover.data, 'base64')
// 			body.coverImageType = cover.type
// 		}
// 	}
// }
