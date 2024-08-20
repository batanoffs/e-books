import { model, Schema, Types } from 'mongoose'
import { IBookSchema } from '../interfaces/book.interface'
import Category from './Category'

const TextbookSchema: Schema = new Schema({
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
	description: { type: String, required: true },
	coverImage: { type: Buffer, required: true }, //TODO update logic for multiple images
	coverImageType: { type: String, required: true }, //TODO update logic for multiple images
	stock: { type: Number, required: true },
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

TextbookSchema.path('categories').validate(async function (value: Types.ObjectId[]) {
    const categories = await Category.find({ _id: { $in: value }, categoryType: 'textbook' });
  
    return categories.length === value.length;
  }, 'One or more categories are invalid or not of type textbook.');

TextbookSchema.virtual('coverImagePath').get(function () {
	if (this.coverImage != null && this.coverImageType != null) {
		return `data:${this.coverImageType};charset=utf-8;base64,${this.coverImage.toString(
			'base64'
		)}`
	}
})
const Textbook = model<IBookSchema>('Textbook', TextbookSchema)

export default Textbook
