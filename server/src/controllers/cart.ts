import { Request, Response } from 'express'
import Cart from '../models/Cart'

export const addToCart = async (req: Request, res: Response) => {
	const { userId, productId, quantity, name, price, productType } = req.body

	try {
		let cart = await Cart.findOne({ userId })
		console.log('find cart:', cart)

		if (!cart) {
			cart = new Cart({
				userId,
				products: [{ productType, productId, quantity, name, price }],
			})
			console.log('new cart:', cart)
		} else {
			const existingProduct = cart.products.find(
				product => product.productId.toString() === productId.toString()
			)
			if (existingProduct) {
				existingProduct.quantity += quantity
			} else {
				cart.products.push({ productType, productId, quantity, name, price })
			}
		}

		await cart.save()
		res.status(200).json(cart)
	} catch (error) {
		res.status(500).json({ message: 'Error adding to cart', error })
	}
}

export const getCart = async (req: Request, res: Response) => {
	const { userId } = req.params

	try {
		const cart = await Cart.findOne({ userId })
		if (!cart) {
			return res.status(404).json({ message: 'Cart not found' })
		}
		res.status(200).json(cart)
	} catch (error) {
		res.status(500).json({ message: 'Error fetching cart', error })
	}
}

export const removeProductFromCart = async (req: Request, res: Response) => {
	const { userId, productId } = req.params

	try {
		const cart = await Cart.findOne({ userId })

		if (!cart) {
			return res.status(404).json({ message: 'Cart not found' })
		}

		const updatedProducts = cart.products.filter(
			product => product.productId.toString() !== productId.toString()
		)
		cart.products = updatedProducts

		await cart.save()
		res.status(200).json(cart)
	} catch (error) {
		res.status(500).json({ message: 'Error removing product from cart', error })
	}
}

export const clearCart = async (req: Request, res: Response) => {
	const { userId } = req.params

	try {
		const cart = await Cart.findOne({ userId })

		if (!cart) {
			return res.status(404).json({ message: 'Cart not found' })
		}

		cart.products = []
		await cart.save()
		res.status(200).json({ message: 'Cart cleared successfully' })
	} catch (error) {
		res.status(500).json({ message: 'Error clearing cart', error })
	}
}
