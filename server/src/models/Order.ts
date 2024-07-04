import { model, Schema } from 'mongoose';
import { IOrder } from '../interfaces/order.interface';

const OrderSchema: Schema = new Schema({
    userId: { type: String, required: true },
    books: [
        {
            bookId: { type: String, required: true },
            quantity: { type: Number, required: true },
        },
    ],
    total: { type: Number, required: true },
    status: {
        type: String,
        required: true,
        enum: ['pending', 'shipped', 'delivered'],
        default: 'pending',
    },
});

const Order = model<IOrder>('Order', OrderSchema);

export default Order;
