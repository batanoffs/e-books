import { model, Schema } from 'mongoose'
import { IBookSchema } from '../interfaces/book.interface'
import Categories from './Categories';

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
	coverImage: {
		type: Buffer,
		required: true,
	},
	coverImageType: {
		type: String,
		required: true,
	},
	stock: {
		type: Number,
		required: [true, 'Stock is required'],
		min: [0, 'Stock must be greater than or equal to 0'],
	},
	categories: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Categories',
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

	pageCount: {
		type: Number,
		min: 1,
	},
	translator: {
		type: String,
		trim: true,
		default: 'няма',
	},
	dimensions: {
		type: String,
		trim: true,
		default: 'липсва информация',
	},
	coverPageType: {
		type: String,
		trim: true,
		enum: ['мека', 'твърда'],
		default: 'мека',
	},
	createdAt: {
		type: Date,
		default: Date.now,
		required: true,
	},
})

BookSchema.virtual('categoryDetails').get(async function () {
	const categories = await Categories.find({ _id: { $in: this.categories } }).select('name');
	return categories;
  });
  

BookSchema.virtual('coverImagePath').get(function () {
	if (this.coverImage != null && this.coverImageType != null) {
		return `data:${this.coverImageType};charset=utf-8;base64,${this.coverImage.toString(
			'base64'
		)}`
	}
})

BookSchema.set('toJSON', {
	virtuals: true,
	transform: function (doc, ret) {
	  // Optionally remove sensitive fields
	  delete ret.coverImage;
	  return ret;
	}
  });
  

const Book = model<IBookSchema>('Book', BookSchema)

export default Book
