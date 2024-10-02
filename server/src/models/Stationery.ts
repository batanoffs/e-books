import { model, Schema } from 'mongoose'
import { IStationerySchema } from '../interfaces/stationery.interface'

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
	description: {
		type: String,
		required: [true, 'Description is required'],
		trim: true,
		default: 'липсва описание',
	},
	productType: {
		type: String,
		default: 'Stationery',
		required: true,
	},
	picture: {
		type: String,
		required: true,
	},
	categories: [
		{
			type: Schema.Types.ObjectId,
			ref: 'StationeryCategories',
			required: true,
		},
	],
	dimensions: {
		type: String,
		trim: true,
		default: 'липсва информация',
	},
	stock: {
		type: Number,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
		required: true,
	},
})

const Stationery = model<IStationerySchema>('Stationery', StationerySchema)

export default Stationery
