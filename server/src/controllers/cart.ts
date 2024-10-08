import { NextFunction, Request, Response } from 'express'
import Cart from '../models/Cart'

export const addToCart = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	const { productId, productType, quantity } = req.body

	try {
		if (!req.user) {
			res.status(401).json({ message: 'Not Authenticated!' })
			return
		}

		if (!productId || !productType || !quantity) {
			res.status(400).json({ message: 'Missing required fields' })
			return
		}

		const { id } = req.user
		let cart = await Cart.findOne({ userId: id }).populate({
			path: 'products',
			populate: { path: 'productRef' },
		})

		if (!cart) {
			cart = new Cart({
				userId: id,
				products: [
					{
						productRef: productId,
						productType,
						quantity,
					},
				],
			})
		} else {
			const existingProduct = cart.products.find(
				product => product.productRef._id.toString() === productId.toString()
			)
			if (existingProduct) {
				existingProduct.quantity += quantity
			} else {
				cart.products.push({
					productRef: productId,
					productType,
					quantity,
				})
			}
		}

		await cart.save()
		res.status(200).json(cart)
	} catch (error) {
		res.status(500).json({ message: 'Error adding to cart', error })
	}
}

export const getCart = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	if (!req.user) {
		res.status(401).json({ message: 'Not Authenticated!' })
		return
	}

	const { id } = req.user

	try {
		const cart = await Cart.findOne({ userId: id })
			.populate({
				path: 'products',
				populate: { path: 'productRef' },
			})
			.lean()

		if (!cart) {
			res.status(204).json({ message: 'Cart not found' })
			return
		}

		//TODO check products.products
		res.status(200).json(cart.products)
	} catch (error) {
		res.status(500).json({ message: 'Error fetching cart', error })
	}
}

export const removeProductFromCart = async (
	req: Request,
	res: Response,
	next: NextFunction
): Promise<void> => {
	const { productId } = req.query
	try {
		if (!req.user) {
			res.status(401).json({ message: 'Not Authenticated!' })
			return
		}

		const { id } = req.user
		if (!productId) {
			res.status(400).json({ message: 'Product ID is missing' })
			return
		}
		// const cart = await Cart.findOne({ userId })
		let cart = await Cart.findOne({ userId: id })

		if (!cart) {
			res.status(404).json({ message: 'Cart not found' })
			return
		}
		//TODO check productRef type and if its goes to string
		const updatedProducts = cart.products.filter(
			product => product.productRef.toString() !== productId.toString()
		)
		cart.products = updatedProducts

		await cart.save()
		res.status(200).json(cart)
	} catch (error) {
		res.status(500).json({ message: 'Error removing product from cart', error })
	}
}

export const clearCart = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		if (!req.user) {
			res.status(401).json({ message: 'Not Authenticated!' })
			return
		}

		const { id } = req.user
		const cart = await Cart.findOneAndUpdate({ userId: id }, { products: [] }, { new: true })

		if (!cart) {
			res.status(404).json({ message: 'Cart not found' })
			return
		}

		res.status(200).json({ message: 'Cart cleared successfully' })
	} catch (error) {
		res.status(500).json({ message: 'Error clearing cart', error })
	}
}
