import { model, Schema } from 'mongoose'
import { IShoppingCart } from '../interfaces/cart.interface'

const ShoppingCartSchema: Schema = new Schema(
	{
		userId: {
			type: Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
		products: [
			{
				productRef: {
					type: Schema.Types.ObjectId,
					refPath: 'products.productType',
					required: true,
				},
				productType: {
					type: String,
					enum: ['Book', 'Textbook', 'Stationery'],
					required: true,
				},
				quantity: {
					type: Number,
					required: true,
				},
				_id: false,
			},
		],
		active: {
			type: Boolean,
			default: true,
		},
		modifiedAt: {
			type: Date,
			default: Date.now,
		},
	},
	{ timestamps: true }
)

const Cart = model<IShoppingCart>('Cart', ShoppingCartSchema)

export default Cart
