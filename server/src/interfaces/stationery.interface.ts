import { Types } from 'mongoose'

export interface IStationerySchema {
	title: string
	price: number
	description: string
	coverImage: Buffer
	coverImageType: String
	categories: Types.ObjectId[]
	stock: number
	createdAt: Date 
}
