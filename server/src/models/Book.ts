import { model, Schema, Types } from 'mongoose'
import { IBookSchema } from '../interfaces/book.interface'
import Categories from './Category'

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
	},
	coverImage: { type: Buffer, required: true }, //TODO update logic for multiple images
	coverImageType: { type: String, required: true }, //TODO update logic for multiple images
	stock: {
		type: Number,
		required: [true, 'Stock is required'],
		min: [0, 'Stock must be greater than or equal to 0'],
	},
	categories: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Category',
			required: true,
		},
	],
	publisher: { type: String, trim: true },
	language: { type: String, trim: true },
	publishDate: { type: Date },
	pageCount: { type: Number, min: 1 },
	translator: { type: String, trim: true },
	dimensions: { type: String, trim: true },
	coverPageType: { type: String, trim: true },
	createdAt: { type: Date, default: Date.now, required: true },
})

// Ensure the categories belong to 'book' type
BookSchema.path('categories').validate(async function (value: Types.ObjectId[]) {
	// Query the Category model to check if all provided categories exist and belong to 'book'
	const categories = await Categories.find({ _id: { $in: value }, categoryType: 'book' })

	// Return true if all categories exist and are of type 'book'
	return categories.length === value.length
}, 'One or more categories are invalid or not of type book.')

BookSchema.virtual('coverImagePath').get(function () {
	if (this.coverImage != null && this.coverImageType != null) {
		return `data:${this.coverImageType};charset=utf-8;base64,${this.coverImage.toString(
			'base64'
		)}`
	}
})

BookSchema.set('toJSON', {
	virtuals: true,
})

const Book = model<IBookSchema>('Book', BookSchema)

export default Book
