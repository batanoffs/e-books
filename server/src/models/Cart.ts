import { model, Schema } from 'mongoose'
import { IShoppingCart } from '../interfaces/shoppingcart.interface'

const CartProductSchema: Schema = new Schema(
	{
		productType: { 
            type: String, 
            required: true 
        },
        productImage: {
            type: String,
            required: true
        },
		productId: { 
            type: Schema.Types.ObjectId, 
            required: true 
        },
		quantity: { 
            type: Number, 
            required: true 
        },
		name: { 
            type: String, 
            required: true 
        },
		price: { 
            type: Number, 
            required: true 
        },
	},
	{ _id: false }
)

const ShoppingCartSchema: Schema = new Schema(
	{
		userId: { 
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true },
		products: [CartProductSchema],
		active: { 
            type: Boolean, 
            default: true 
        },
		modifiedAt: { 
            type: Date, 
            default: Date.now 
        },
	},
	{ timestamps: true }
)

const Cart = model<IShoppingCart>('Cart', ShoppingCartSchema)

export default Cart
