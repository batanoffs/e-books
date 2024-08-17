import { Types } from 'mongoose'

export interface IWishlistSchema {
	user: Types.ObjectId
	productRefs: {
		product: Types.ObjectId
	}[]
}
