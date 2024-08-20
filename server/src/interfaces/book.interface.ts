import { Document, Types } from 'mongoose'

export interface IBookSchema extends Document {
	title: string
	author: string
	price: number
	description: string
	coverImage: Buffer //TODO update logic for multiple images
	coverImageType: String
	stock: number
	categories: Types.ObjectId[] // References only book category IDs
	publisher?: string
	language?: string
	publishDate?: Date
	pageCount?: number
	translator?: string
	dimensions?: string
	coverPageType?: string
	createdAt: Date
}
