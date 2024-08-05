import { model, Schema } from 'mongoose'
import { IShoppingCart } from '../interfaces/cart.interface'

const CartProductSchema: Schema = new Schema(
	{
		productType: {
			type: String,
			required: true,
		},
		productImage: {
			type: Buffer,
			required: true,
		},
		productImageType: {
			type: String,
			required: true,
		},
		productId: {
			type: Schema.Types.ObjectId,
			required: true,
		},
		quantity: {
			type: Number,
			required: true,
		},
		name: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
	},
	{ _id: false }
)

CartProductSchema.virtual('productImagePath').get(function () {
    if (this.productImage != null && this.productImageType != null) {
        return `data:${this.productImageType};charset=utf-8;base64,${this.productImage.toString(
            'base64'
        )}`;
    }
});

CartProductSchema.set('toJSON', {
    virtuals: true,
});

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
