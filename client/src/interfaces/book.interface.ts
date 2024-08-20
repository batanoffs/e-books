export interface Book {
	_id: string
	title: string
	author: string
	price: number
	description: string
	stock: number
	imageUrl: string
	categories: string[]
	publisher?: string
	language?: string
	publishDate?: Date
	pageCount?: number
	translator?: string
	dimensions?: string
	coverPageType?: string
	coverImageType: string
	coverImage?: {
		type: string
		data: Buffer
	}
	createdAt: Date
	coverImagePath?: string
}

export interface Books {
	books: Book[]
}
