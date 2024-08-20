import { Schema, model, Document } from 'mongoose'
import { ICategory } from '../interfaces/category.interface'

const categorySchema = new Schema<ICategory>(
	{
		books: {
			type: [String],
			unique: true,
			required: true,
			trim: true,
			minlength: 3,
			lowercase: true,
		},
		textbooks: {
			type: [String],
			unique: true,
			required: true,
			trim: true,
			minlength: 3,
			lowercase: true,
		},

		stationery: {
			type: [String],
			unique: true,
			required: true,
			trim: true,
			minlength: 3,
			lowercase: true,
		},
	},
	{
		timestamps: true,
	}
)

const Category = model<ICategory>('Category', categorySchema)
export default Category

const BookCategories = [
	'Топ заглавия',
	'Най-нови книги',
	'Промоции книги',
	'Детска литература',
	'Дом, семейство, хоби',
	'Езотерика',
	'Енциклопедии',
	'Изкуство',
	'Икономика и бизнес',
	'История и политика',
	'За тинейджери',
	'Научно-популярна литература',
	'Психология и философия',
	'Речници',
	'Списания',
	'Справочници',
	'Туризъм',
	'Художествена литература',
	'Чуждоезикова литература',
	'Юридическа литература',
	'Здраве и бизнес',
]
