import { Document, Types } from 'mongoose'

export interface IOrderSchema extends Document {
	userId: string
	products: {
		productId: Types.ObjectId
		productType: 'Book' | 'Textbook' | 'Stationery'
		quantity: number
	}[]
	total: number
	shippingStatus: 'pending' | 'shipped' | 'delivered'
	shippingProvider?: string
	shipping_details: {
		address: {
			city: string
			country: string
			line1: string
			line2?: string | null
			postal_code?: string | null
			state?: string | null
		}
		name: string
	}
	paymentStatus: 'pending' | 'paid' | 'refunded'
	createdAt: Date
}
