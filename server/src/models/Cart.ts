import { model, Schema } from 'mongoose'
import { IShoppingCart } from '../interfaces/cart.interface'

const CartProductSchema: Schema = new Schema(
	{
		product: {
			type: Schema.Types.ObjectId,
			ref: 'Book',
			required: true,
		},
		quantity: {
			type: Number,
			required: true,
		},
	},
	{ _id: false }
)

const ShoppingCartSchema: Schema = new Schema(
	{
		userId: {
			type: Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
		products: [CartProductSchema],
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
