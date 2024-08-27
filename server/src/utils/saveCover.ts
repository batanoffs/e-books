import { IBookSchema } from '../interfaces/book.interface'

const imageMimeTypes = ['image/jpeg', 'image/png', 'image/gif'] // Update if needed

export default function saveCover(body: IBookSchema, coverEncoded: string) {
	if (coverEncoded.length > 0) {
		const cover = JSON.parse(coverEncoded)
		if (cover && imageMimeTypes.includes(cover.type)) {
			body.coverImage = Buffer.from(cover.data, 'base64')
			body.coverImageType = cover.type
		}
	}
}
