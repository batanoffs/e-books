import { model, Schema } from 'mongoose'
import { IBookSchema } from '../interfaces/book.interface'

const BookSchema: Schema = new Schema({
	title: {
		type: String,
		required: [true, 'Title is required'],
		trim: true,
		minlength: 3,
	},
	author: {
		type: String,
		required: [true, 'Author is required'],
		trim: true,
	},
	price: {
		type: Number,
		required: [true, 'Price is required'],
		min: [0, 'Price must be greater than or equal to 0'],
	},
	description: {
		type: String,
		required: [true, 'Description is required'],
		trim: true,
		default: 'липсва описание',
	},
	picture: {
		type: String,
		required: true,
	},
	coverPageType: {
		type: String,
		trim: true,
		enum: ['мека', 'твърда'],
		default: 'мека',
	},
	stock: {
		type: Number,
		required: [true, 'Stock is required'],
		min: [0, 'Stock must be greater than or equal to 0'],
	},
	categories: [
		{
			type: Schema.Types.ObjectId,
			ref: 'BookCategories',
			required: true,
		},
	],
	publisher: {
		type: String,
		required: [true, 'Publisher is required'],
		trim: true,
	},
	language: {
		type: String,
		default: 'Български',
		trim: true,
	},
	publishDate: {
		type: Date,
	},
	productType: {
		type: String,
		default: 'Book',
		required: true,
	},
	pageCount: {
		type: Number,
		min: 1,
	},
	translator: {
		type: String,
		trim: true,
		default: 'N/A',
	},
	dimensions: {
		type: String,
		trim: true,
		default: 'N/A',
	},
	createdAt: {
		type: Date,
		default: Date.now,
		required: true,
	},
})

const Book = model<IBookSchema>('Book', BookSchema)

export default Book
