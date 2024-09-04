import { Types } from 'mongoose'

export interface IStationerySchema {
	title: string
	price: number
	description: string
	picture: string
	categories: Types.ObjectId[]
	stock: number
	createdAt: Date
}
