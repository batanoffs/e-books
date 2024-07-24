import { Document, Types } from 'mongoose';

interface ICartProduct {
    productType: 'Book' | 'Textbook' | 'Items'; //TODO Specify the types of products
    productId: Types.ObjectId; // Reference to the specific product
    quantity: number;
    name: string;
    price: number;
}

export interface IShoppingCart extends Document {
    userId: Types.ObjectId;
    products: ICartProduct[];
    active: boolean;
    modifiedAt: Date;
}
