import { model, Schema } from 'mongoose';
import { IBook } from '../interfaces/book.interface';

const BookSchema: Schema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    images: { type: [String], required: true },
    stock: { type: Number, required: true },
    category: { type: String, required: true },
    publisher: { type: String, required: false },
    language: { type: String, required: false },
    yearPublished: { type: Date, required: false },
    pages: { type: Number, required: false },
    translator: { type: String, required: false },
    dimensions: { type: String, required: false },
    coverPageType: { type: String, required: false },
});

const Book = model<IBook>('Book', BookSchema);

export default Book;
