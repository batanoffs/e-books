import { Document } from 'mongoose';

export interface IBookSchema extends Document {
    title: string;
    author: string;
    price: number;
    description: string;
    coverImage: Buffer; //TODO update logic for multiple images
    coverImageType: String;
    stock: number;
    category: string;
    publisher?: string;
    language?: string;
    publishDate?: Date;
    pageCount?: number;
    translator?: string;
    dimensions?: string;
    coverPageType?: string;
    createdAt: Date;
}