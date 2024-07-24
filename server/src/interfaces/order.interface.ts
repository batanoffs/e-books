export interface IOrderSchema extends Document {
    userId: string;
    products: { productId: string; productType: 'Book' | 'Textbook' | 'Stationery'; quantity: number }[];
    total: number;
    status: string;
}

