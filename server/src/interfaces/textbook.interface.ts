export interface ITextbookSchema {
    title: string;
    author: string;
    price: number;
    description: string;
    imageUrl: string;
    stock: number;
    category: Array<string>;
}
