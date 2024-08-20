import { model, Schema, Types } from 'mongoose'
import { IStationerySchema } from '../interfaces/stationery.interface'
import Category from './Category'

const StationerySchema: Schema = new Schema({
	title: {
		type: String,
		required: [true, 'Title is required'],
		trim: true,
		minlength: 3,
	},

	price: {
		type: Number,
		required: [true, 'Price is required'],
		min: [0, 'Price must be greater than or equal to 0'],
	},
	description: { type: String, required: true },
	coverImage: { type: Buffer, required: true }, //TODO update logic for multiple images
	coverImageType: { type: String, required: true },
	categories: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Category',
			required: true,
		},
	],
	stock: { type: Number, required: true },
	createdAt: { type: Date, default: Date.now, required: true },
})

StationerySchema.path('categories').validate(async function (value: Types.ObjectId[]) {
    const categories = await Category.find({ _id: { $in: value }, categoryType: 'stationery' });
  
    return categories.length === value.length;
  }, 'One or more categories are invalid or not of type stationery.');

StationerySchema.virtual('coverImagePath').get(function () {
	if (this.coverImage != null && this.coverImageType != null) {
		return `data:${this.coverImageType};charset=utf-8;base64,${this.coverImage.toString(
			'base64'
		)}`
	}
})

const Stationery = model<IStationerySchema>('Stationery', StationerySchema)

export default Stationery
