import { Document, Types } from 'mongoose'

interface ICartProduct {
	productRef: Types.ObjectId
	quantity: number
	productType: 'Book' | 'Textbook' | 'Stationery'
}
export interface IShoppingCart extends Document {
	userId: Types.ObjectId
	products: ICartProduct[]
	active: boolean
	modifiedAt: Date
}
