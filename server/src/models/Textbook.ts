import { model, Schema } from 'mongoose';
import { IBookSchema } from '../interfaces/book.interface';

const TextbookSchema: Schema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    coverImage: { type: Buffer, required: true }, //TODO update logic for multiple images
    coverImageType: { type: String, required: true }, //TODO update logic for multiple images
    stock: { type: Number, required: true },
    category: { type: String, required: true },
    publisher: { type: String, required: false },
    language: { type: String, required: false },
    publishDate: { type: Date, required: false },
    pageCount: { type: Number, required: false },
    translator: { type: String, required: false },
    dimensions: { type: String, required: false },
    coverPageType: { type: String, required: false },
    createdAt: { type: Date, default: Date.now, required: true },
});

TextbookSchema.virtual('coverImagePath').get(function () {
    if (this.coverImage != null && this.coverImageType != null) {
        return `data:${this.coverImageType};charset=utf-8;base64,${this.coverImage.toString(
            'base64'
        )}`;
    }
});
const Textbook = model<IBookSchema>('Textbook', TextbookSchema);

export default Textbook;
