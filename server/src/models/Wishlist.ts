import { model, Schema } from 'mongoose'
import { IWishlistSchema } from '../interfaces/wishlist.interface'

const WishlistSchema = new Schema(
	{
		user: {
			type: Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
		productRefs: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Book',
				unique: true,
				required: true,
			},
		],
	},
	{
		timestamps: true,
		versionKey: false,
	}
)

const Wishlist = model<IWishlistSchema>('Wishlist', WishlistSchema)

export default Wishlist
