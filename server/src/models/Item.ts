import mongoose, { Schema, Document } from 'mongoose';

interface IItem extends Document {
    title: string;
    price: number;
    description: string;
    imageUrl: string;
    stock: number;
    category: string;
}

const ItemSchema: Schema = new Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    category: { type: String, required: true },
    stock: { type: Number, required: true },
});

const Item = mongoose.model<IItem>('Item', ItemSchema);

export default Item;
