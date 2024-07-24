import { model, Schema } from 'mongoose';
import { IFeaturedSchema } from '../interfaces/featured.interface';

const FeaturedSchema: Schema = new Schema({
    productId: { type: Schema.Types.ObjectId, required: true, refPath: 'productType' },
    productType: { type: String, required: true, enum: ['Book', 'Textbook', 'Stationery'] },
    featuredAt: { type: Date, default: Date.now },
});

const Featured = model<IFeaturedSchema>('Featured', FeaturedSchema);

export default Featured;
