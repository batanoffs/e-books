import { model, Schema } from 'mongoose';
import { IFeatured } from '../interfaces/featured.interface';

const FeaturedSchema: Schema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    category: { type: String, required: true },
    stock: { type: Number, required: true },
});

const Featured = model<IFeatured>('Featured', FeaturedSchema);

export default Featured;
