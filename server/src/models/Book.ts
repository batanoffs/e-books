import { model, Schema } from 'mongoose';
import { IBook } from '../interfaces/book.interface';

const BookSchema: Schema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    stock: { type: Number, required: true },
    category: {
        type: ['Self-Help', 'Business', 'Fiction', 'Spirituality', 'Poetry'], //TODO edit category
        required: true,
    },
});

const Book = model<IBook>('Book', BookSchema);

export default Book;
