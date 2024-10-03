import { Types } from 'mongoose'

export interface IStationerySchema {
	title: string
	price: number
	description?: string
	productType: string
	picture: string
	categories: Types.ObjectId[]
	dimensions?: string
	stock: number
	createdAt: Date
}
