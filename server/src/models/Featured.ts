import mongoose, { Schema, Document } from 'mongoose';

interface IFeatured extends Document {
    title: string;
    author: string;
    price: number;
    description: string;
    imageUrl: string;
    stock: number;
    category: string;
}

const FeaturedSchema: Schema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    category: { type: String, required: true },
    stock: { type: Number, required: true },
});

const Featured = mongoose.model<IFeatured>('Item', FeaturedSchema);

export default Featured;
