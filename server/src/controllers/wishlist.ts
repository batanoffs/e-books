import { NextFunction, Request, Response } from 'express'
import Wishlist from '../models/Wishlist'

export const createOrUpdateWishlist = async (
	req: Request,
	res: Response,
	next: NextFunction
): Promise<void> => {
	const userId = req.user?.id

	if (!userId) {
		res.status(401).json({ message: 'Unauthorized' })
		return
	}

	const { productId } = req.body
	//productId type string
	if (!productId) {
		res.status(400).json({ message: 'Product ID is required' })
		return
	}

	try {
		// Find and update the wishlist, or create a new one if it doesn't exist
		const filter = { user: userId }
		const update = {
			$addToSet: {
				productRefs: [productId],
			},
		}

		const updatedWishlist = await Wishlist.findOneAndUpdate(filter, update, {
			new: true,
			upsert: true,
		})
		// Respond with the updated or newly created wishlist
		res.status(200).json(updatedWishlist)
	} catch (error) {
		res.status(500).json({ message: 'Error creating or updating wishlist', error: error })
	}
}

export const getWishlist = async (
	req: Request,
	res: Response,
	next: NextFunction
): Promise<void> => {
	try {
		const userId = req.user?.id

		if (!userId) {
			res.status(401).json({ message: 'Unauthorized' })
			return
		}

		const wishlistWithProducts = await Wishlist.findOne({ user: userId }).populate({
			path: 'productRefs',
			select: 'title price picture',
			options: {
				lean: true,
			},
		})

		if (!wishlistWithProducts) {
			res.status(404).json({ message: 'Wishlist not found' })
			return
		}

		res.status(200).json(wishlistWithProducts)
	} catch (error) {
		res.status(500).json({ message: 'Error fetching wishlist', error })
	}
}

export const deleteWishlist = async (
	req: Request,
	res: Response,
	next: NextFunction
): Promise<void> => {
	const userId = req.user?.id

	if (!userId) {
		res.status(401).json({ message: 'Unauthorized' })
		return
	}

	const { productId } = req.params

	if (!productId) {
		res.status(400).json({ message: 'Product ID is required' })
		return
	}

	try {
		// Attempt to remove the product from the wishlist directly in the database
		const result = await Wishlist.updateOne(
			{ user: userId },
			{ $pull: { productRefs: { _id: productId } } }
		)

		// Check if the operation was successful
		if (result.modifiedCount === 0) {
			res.status(404).json({ message: 'Product not found in wishlist' })
			return
		}

		res.status(200).json({ message: 'Product removed from wishlist successfully' })
	} catch (error) {
		res.status(500).json({ message: 'Error removing product from wishlist', error })
	}
}
