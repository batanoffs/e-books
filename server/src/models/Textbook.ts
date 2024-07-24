import { model, Schema } from 'mongoose';
import { IBookSchema } from '../interfaces/book.interface';

const TextbookSchema: Schema = new Schema({
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
    coverpageType: { type: String, required: false },
});

const Textbook = model<IBookSchema>('Textbook', TextbookSchema);

export default Textbook;
