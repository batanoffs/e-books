import { model, Schema } from 'mongoose'
import { IOrderSchema } from '../interfaces/order.interface'

const OrderSchema: Schema = new Schema({
	userId: {
		type: String,
		required: true,
	},
	products: [
		{
			productId: {
				type: Schema.Types.ObjectId,
				required: true,
				refPath: 'productType',
			},
			productType: {
				type: String,
				required: true,
				enum: ['Book', 'Textbook', 'Stationery'],
			},
			quantity: { type: Number, required: true },
		},
	],
	total: {
		type: Number,
		required: true,
	},
	status: {
		type: String,
		required: true,
		enum: ['pending', 'shipped', 'delivered'],
		default: 'pending',
	},
})

const Order = model<IOrderSchema>('Order', OrderSchema)

export default Order
