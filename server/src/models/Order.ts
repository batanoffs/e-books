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
		createdAt: {
			type: Date,
			default: Date.now,
		},
	},
	{ timestamps: true }
)

const Order = model<IOrderSchema>('Order', OrderSchema)

export default Order
