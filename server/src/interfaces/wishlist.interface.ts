import { Document, Types } from 'mongoose'

export interface IWishlistSchema extends Document {
	user: Types.ObjectId
	productRefs: Types.ObjectId[]
}


