import mongoose, { Schema, Document } from 'mongoose';

interface IOrder extends Document {
  userId: string;
  books: { bookId: string; quantity: number }[];
  total: number;
  status: string;
}

const OrderSchema: Schema = new Schema({
  userId: { type: String, required: true },
  books: [
    {
      bookId: { type: String, required: true },
      quantity: { type: Number, required: true },
    },
  ],
  total: { type: Number, required: true },
  status: { type: String, required: true, enum: ['pending', 'shipped', 'delivered'], default: 'pending' },
});

const Order = mongoose.model<IOrder>('Order', OrderSchema);

export default Order;
