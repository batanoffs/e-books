import { model, Schema } from 'mongoose';
import { IStationerySchema } from '../interfaces/stationery.interface';

const StationerySchema: Schema = new Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    coverImage: { type: Buffer, required: true }, //TODO update logic for multiple images
    coverImageType: { type: String, required: true },
    category: { type: String, required: true },
    stock: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now, required: true },
});

StationerySchema.virtual('coverImagePath').get(function () {
    if (this.coverImage != null && this.coverImageType != null) {
        return `data:${this.coverImageType};charset=utf-8;base64,${this.coverImage.toString(
            'base64'
        )}`;
    }
});

const Stationery = model<IStationerySchema>('Stationery', StationerySchema);

export default Stationery;
