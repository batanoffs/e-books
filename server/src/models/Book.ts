import mongoose, { Schema, Document } from 'mongoose';

interface IBook extends Document {
    title: string;
    author: string;
    price: number;
    description: string;
    imageUrl: string;
    stock: number;
    category: string;
}

const BookSchema: Schema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    stock: { type: Number, required: true },
    category: { type: String, required: true },
});

const Book = mongoose.model<IBook>('Book', BookSchema);

export default Book;
