import { Schema, model } from 'mongoose'
import { ICategory } from '../interfaces/category.interface'

const TextbookCategoriesSchema = new Schema(
	{
		name: {
			type: String,
			required: [true, 'Category name is required'],
			unique: true, // Ensure the name is unique globally
			trim: true,
			minlength: 3,
			lowercase: true,
		},
	},
	{
		versionKey: false,
		timestamps: true,
	}
)

const TextbookCategories = model<ICategory>('TextbookCategories', TextbookCategoriesSchema)
export default TextbookCategories
