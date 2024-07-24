import { Request, Response, NextFunction } from 'express';
import Featured from '../models/Featured';
import Book from '../models/Book';
import Textbook from '../models/Textbook';
import Stationery from '../models/Stationery';

export const markAsFeatured = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { productId, productType } = req.body;
        // Ensure the product exists
        let product;
        if (productType === 'Book') product = await Book.findById(productId);
        if (productType === 'Textbook') product = await Textbook.findById(productId);
        if (productType === 'Stationery') product = await Stationery.findById(productId);

        if (!product) {
            throw new Error('Product not found');
        }

        // Create featured entry
        const featured = await Featured.create({ productId, productType });
        res.status(201).json(featured);
    } catch (err) {
        next(err);
    }
};

export const getFeaturedProducts = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const featuredProducts = await Featured.find().populate('productId');
        const result = featuredProducts.map(({ productId, productType }) => ({
            product: productId,
            type: productType,
        }));
        res.status(200).json(result);
    } catch (err) {
        next(err);
    }
};

export const removeFromFeatured = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { productId, productType } = req.body;
        // Ensure the product exists
        let product;
        if (productType === 'Book') product = await Book.findById(productId);
        if (productType === 'Textbook') product = await Textbook.findById(productId);
        if (productType === 'Stationery') product = await Stationery.findById(productId);

        if (!product) {
            throw new Error('Product not found');
        }

        // Find and delete featured entry
        const featured = await Featured.findOne({ productId, productType });
        if (!featured) {
            throw new Error('Featured entry not found');
        }
        await featured.deleteOne();

        res.status(200).send('Removed from featured');
    } catch (err) {
        next(err);
    }
};
