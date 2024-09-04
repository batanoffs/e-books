import { Document, Types } from 'mongoose'

export interface IBookSchema extends Document {
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
	pageCount?: number
	translator?: string
	dimensions?: string
	createdAt: Date
}
