import { IBookSchema } from '../interfaces/book.interface';

const imageMimeTypes = ['image/jpeg', 'image/png', 'image/gif']; // Update if needed

export default function saveCover(newBook: IBookSchema, coverEncoded: string) {
    if (!coverEncoded) return;
    const cover = JSON.parse(coverEncoded);
    if (cover && imageMimeTypes.includes(cover.type)) {
        newBook.coverImage = Buffer.from(cover.data, 'base64');
        newBook.coverImageType = cover.type;
    }
}