import { Document, Schema } from 'mongoose';

export interface IFeaturedSchema extends Document {
    productId: Schema.Types.ObjectId;
    productType: 'Book' | 'Textbook' | 'Stationery';
    featuredAt: Date;
}
