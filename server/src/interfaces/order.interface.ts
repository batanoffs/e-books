export interface IOrder extends Document {
    userId: string;
    books: { bookId: string; quantity: number }[];
    total: number;
    status: string;
}
