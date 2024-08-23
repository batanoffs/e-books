import { Types } from 'mongoose'

export interface ITextbookSchema {
	title: string
	author: string
	price: number
	description: string
	coverImage: Buffer
	coverImageType: String
	stock: number
	categories: Types.ObjectId[]
	publisher?: string
	language?: string
	publishDate?: Date
	pageCount?: number
	translator?: string
	dimensions?: string
	coverPageType?: string
	createdAt: Date
}
