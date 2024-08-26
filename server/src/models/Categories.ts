import { Schema, model } from 'mongoose'

const categorySchema = new Schema(
	{
		name: {
			type: String,
			required: [true, 'Category name is required'],
			unique: true, // Ensure the name is unique globally
			trim: true,
			minlength: 3,
			lowercase: true,
		},
		categoryType: {
			type: String,
			required: [true, 'Category type is required'],
			enum: ['book', 'textbook', 'stationery'],
		},
	},
	{
		versionKey: false,
		timestamps: true,
	}
)

const Categories = model('Categories', categorySchema)
export default Categories

// import { Schema, model, Document } from 'mongoose'
// import { ICategory } from '../interfaces/category.interface'

// const categorySchema = new Schema<ICategory>(
// 	{
// 		books: [
// 			{
// 				type: String,
// 				unique: true,
// 				required: true,
// 				trim: true,
// 				minlength: 3,
// 				lowercase: true,
// 			},
// 		],
// 		textbooks: [
// 			{
// 				type: String,
// 				unique: true,
// 				required: true,
// 				trim: true,
// 				minlength: 3,
// 				lowercase: true,
// 			},
// 		],
// 		stationery: [
// 			{
// 				type: String,
// 				unique: true,
// 				required: true,
// 				trim: true,
// 				minlength: 3,
// 				lowercase: true,
// 			},
// 		],
// 	},
// 	{
// 		versionKey: false,
// 		timestamps: true,
// 		_id: false,
// 	}
// )

// const Categories = model<ICategory>('Categories', categorySchema)
// export default Categories

// const BookCategories = [
// 	'Топ заглавия',
// 	'Най-нови книги',
// 	'Промоции книги',
// 	'Детска литература',
// 	'Дом, семейство, хоби',
// 	'Езотерика',
// 	'Енциклопедии',
// 	'Изкуство',
// 	'Икономика и бизнес',
// 	'История и политика',
// 	'За тинейджери',
// 	'Научно-популярна литература',
// 	'Психология и философия',
// 	'Речници',
// 	'Списания',
// 	'Справочници',
// 	'Туризъм',
// 	'Художествена литература',
// 	'Чуждоезикова литература',
// 	'Юридическа литература',
// 	'Здраве и бизнес',
// ]
