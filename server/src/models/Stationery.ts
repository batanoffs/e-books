import { model, Schema } from 'mongoose';
import { IStationerySchema } from '../interfaces/stationery.interface';

const StationerySchema: Schema = new Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    images: { type: [String], required: true },
    category: { type: String, required: true },
    stock: { type: Number, required: true },
});

const Stationery = model<IStationerySchema>('Stationery', StationerySchema);

export default Stationery;
