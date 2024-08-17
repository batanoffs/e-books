import { Request, Response } from 'express'
import Wishlist from '../models/Wishlist'

export const createOrUpdateWishlist = async (req: Request, res: Response) => {
	const userId = req.user?.id

	if (!userId) {
		return res.status(401).json({ message: 'Unauthorized' })
	}

	const { productId } = req.body

	if (!productId) {
		return res.status(400).json({ message: 'Product ID is required' })
	}

	try {
		// Find and update the wishlist, or create a new one if it doesn't exist
		const updatedWishlist = await Wishlist.findOneAndUpdate(
			{ user: userId },
			{ $addToSet: { productRefs: { product: productId } } },
			{ new: true, upsert: true }
		)

		// Respond with the updated or newly created wishlist
		return res.status(200).json(updatedWishlist)
	} catch (error) {
		return res.status(500).json({ message: 'Error creating or updating wishlist', error })
	}
}

export const getWishlist = async (req: Request, res: Response) => {
	try {
		const userId = req.user?.id

		if (!userId) {
			return res.status(401).json({ message: 'Unauthorized' })
		}

		const wishlistWithProducts = await Wishlist.findOne({ user: userId }).populate({
			path: 'productRefs.product',
			select: 'title price coverImagePath coverImageType coverImage',
		})

		if (!wishlistWithProducts) {
			return res.status(404).json({ message: 'Wishlist not found' })
		}

		return res.status(200).json(wishlistWithProducts)
	} catch (error) {
		res.status(500).json({ message: 'Error fetching wishlist', error })
	}
}

export const deleteWishlist = async (req: Request, res: Response) => {
	const userId = req.user?.id

	if (!userId) {
		return res.status(401).json({ message: 'Unauthorized' })
	}

	const { productId } = req.params

	if (!productId) {
		return res.status(400).json({ message: 'Product ID is required' })
	}

	try {
		// Attempt to remove the product from the wishlist directly in the database
		const result = await Wishlist.updateOne(
			{ user: userId },
			{ $pull: { productRefs: { _id: productId } } }
		)

		// Check if the operation was successful
		if (result.modifiedCount === 0) {
			return res.status(404).json({ message: 'Product not found in wishlist' })
		}

		console.log('result', result)

		res.status(200).json({ message: 'Product removed from wishlist successfully' })
	} catch (error) {
		res.status(500).json({ message: 'Error removing product from wishlist', error })
	}
}
