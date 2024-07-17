import { model, Schema } from 'mongoose';
import { IBook } from '../interfaces/book.interface';

const TextbookSchema: Schema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    stock: { type: Number, required: true },
    category: { type: String, required: true },
});

const Textbook = model<IBook>('Textbook', TextbookSchema);

export default Textbook;
