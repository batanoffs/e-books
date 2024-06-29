import mongoose, { Schema, Document } from 'mongoose';

interface IBook extends Document {
    title: string;
    author: string;
    price: number;
    description: string;
    imageUrl: string;
    stock: number;
    category: Array<string>;
}

const BookSchema: Schema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    stock: { type: Number, required: true },
    category: {
        type: ['Self-Help', 'Business', 'Fiction', 'Spirituality', 'Poetry'],
        required: true,
    },
});

const Book = mongoose.model<IBook>('Book', BookSchema);

export default Book;
