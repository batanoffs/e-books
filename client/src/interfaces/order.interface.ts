export interface Order {
	_id: string
	userId: string
	products: {
		productType: 'Book' | 'Textbook' | 'Stationery'
		productId: String
		quantity: number
	}[]
	total: number
	shippingStatus: 'pending' | 'shipped' | 'delivered'
	shippingProvider?: 'Speedy' | 'Econt'
	customer_details: {
		address: {
			city: string
			country: string
			line1: string
			line2: string
			postal_code: string
			state: string
		}
		email: string
		name: string
		phone: string
		tax_exempt: string
		tax_ids: string[]
	}
	shipping_details: {
		address: {
			city: string
			country: string
			line1: string
			line2?: string
			postal_code?: string
			state?: string
		}
		name: string
	}
	sessionId: string
	paymentStatus: 'pending' | 'complete' | 'refunded'
	createdAt: Date
}
