import { Document } from 'mongoose'

export interface ICategory extends Document {
	books: string[]
	textbooks: string[]
	stationery: string[]
}
