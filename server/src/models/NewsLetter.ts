import { model, Schema } from 'mongoose'
import { NewsLetterSchemaTypes } from '../interfaces/newsletter.interface'

const NewsLetterSchema = new Schema<NewsLetterSchemaTypes>({
	email: {
		type: String,
		required: [true, 'Email is required'],
		trim: true,
	},
	status: {
		type: String,
		enum: ['subscribed', 'unsubscribed'],
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
})

const Newsletter = model<NewsLetterSchemaTypes>('Newsletter', NewsLetterSchema)

export default Newsletter
