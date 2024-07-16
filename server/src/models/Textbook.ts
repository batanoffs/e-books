import { model, Schema } from 'mongoose';
import { IBook } from '../interfaces/book.interface';

const TextbookSchema: Schema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    stock: { type: Number, required: true },
    category: {
        type: [
            'Preschool and elementary school',
            'Promotions',
            'Textbooks and aids',
            '1 grade',
            '2 grade',
            '3 grade',
            '4 grade',
            '5 grade',
            '6 grade',
            '7 grade',
            '8 grade',
            '9 grade',
            '10 grade',
            '11 grade',
            '12 grade',
            'Foreign languages courses',
            'Profiled schools',
            'University textbooks',
            'School aids',
            'Teachers books',
        ],
        required: true,
    },
});

const Textbook = model<IBook>('Textbook', TextbookSchema);

export default Textbook;
