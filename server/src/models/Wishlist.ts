import { model, Schema } from 'mongoose'
import { IWishlistSchema } from '../interfaces/wishlist.interface'

const WishlistSchema = new Schema(
	{
		user: {
			type: Schema.Types.ObjectId,
			ref: 'User',
			require: true,
		},
		product: {
			type: Schema.Types.ObjectId,
			ref: 'Product',
			require: true,
		},
		note: {
			type: String,
		},
	},
	{ timestamps: true, versionKey: false }
)

const Wishlist = model<IWishlistSchema>('Wishlist', WishlistSchema)

export default Wishlist
