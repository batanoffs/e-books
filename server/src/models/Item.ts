import { model, Schema } from 'mongoose';
import { IItem } from '../interfaces/item.interface';

const ItemSchema: Schema = new Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    category: { type: String, required: true },
    stock: { type: Number, required: true },
});

const Item = model<IItem>('Item', ItemSchema);

export default Item;
