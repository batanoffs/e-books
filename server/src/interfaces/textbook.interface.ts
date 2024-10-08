import { Types } from 'mongoose'

export interface ITextbookSchema extends Document {
	title: string
	author: string
	price: number
	description: string
	picture: string
	coverPageType: string
	stock: number
	categories: Types.ObjectId[] // References only book category IDs
	publisher?: string
	language?: string
	publishDate?: Date
	productType: 'Textbook'
	pageCount?: number
	translator?: string
	dimensions?: string
	createdAt: Date
}
