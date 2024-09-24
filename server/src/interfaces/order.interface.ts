import { Types } from 'mongoose'

export interface IOrderSchema extends Document {
	userId: String
	products: {
		productId: Types.ObjectId
		productType: 'Book' | 'Textbook' | 'Stationery'
		quantity: number
	}[]
	total: number
	shippingStatus: 'pending' | 'shipped' | 'delivered'
	createdAt: Date
}
