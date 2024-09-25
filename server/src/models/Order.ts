import { model, Schema } from 'mongoose'
import { IOrderSchema } from '../interfaces/order.interface'

const OrderSchema: Schema = new Schema(
	{
		userId: {
			type: String,
			required: true,
		},
		products: [
			{
				productType: {
					type: String,
					required: true,
					enum: ['Book', 'Textbook', 'Stationery'],
				},
				productId: {
					type: Schema.Types.ObjectId,
					required: true,
					refPath: 'products.productType',
				},
				quantity: { type: Number, required: true },
			},
		],
		total: {
			type: Number,
			required: true,
		},
		shippingStatus: {
			type: String,
			required: true,
			enum: ['pending', 'shipped', 'delivered'],
			default: 'pending',
		},
		shippingProvider: {
			type: String,
			trim: true,
			enum: ['Speedy', 'Econt'],
		},
		customer_details: {
			type: {
				address: {
					type: {
						city: String,
						country: String,
						line1: String,
						line2: String,
						postal_code: String,
						state: String,
					},
				},
				email: String,
				name: String,
				phone: String,
				tax_exempt: String,
				tax_ids: [{ type: String }],
			},
			default: {},
		},
		shipping_details: {
			address: {
				city: {
					type: String,
					required: true,
				},
				country: {
					type: String,
					required: true,
				},
				line1: {
					type: String,
					required: true,
				},

				line2: {
					type: String || null,
					required: false,
				},
				postal_code: {
					type: String || null,
					required: false,
				},
				state: {
					type: String || null,
					required: false,
				},
			},
			name: {
				type: String,
				required: true,
			},
		},
		sessionId: {
			type: String,
			required: true,
			unique: true,
		},
		paymentStatus: {
			type: String,
			required: true,
			enum: ['pending', 'complete', 'refunded'],
			default: 'pending',
		},
		createdAt: {
			type: Date,
			default: Date.now,
		},
	},
	{ timestamps: true, unique: false }
)

const Order = model<IOrderSchema>('Order', OrderSchema)

export default Order
