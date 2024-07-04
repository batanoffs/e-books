export interface IFeatured extends Document {
    title: string;
    author: string;
    price: number;
    description: string;
    imageUrl: string;
    stock: number;
    category: string;
}
