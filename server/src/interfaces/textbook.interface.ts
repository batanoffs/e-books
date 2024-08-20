import { Types } from 'mongoose'

export interface ITextbookSchema {
	title: string
	author: string
	price: number
	description: string
	imageUrl: string
	stock: number
	categories: Types.ObjectId[] // References only textbook category IDs
}
