import { Request, Response } from 'express'
import Cart from '../models/Cart'

export const addToCart = async (req: Request, res: Response) => {
	// const {
	// 	userId,
	// 	productId,
	// 	quantity,
	// 	name,
	// 	price,
	// 	productType,
	// 	productImage,
	// 	productImageType,
	// } = req.body
	const { userId, productId, quantity } = req.body

	try {
		// let cart = await Cart.findOne({ userId })
		// let cart = await Cart.findOne({ userId }).populate('products.product')
		let cart = await Cart.findOne({ userId }).populate('products.product', '_id')
		if (!cart) {
			cart = new Cart({
				userId,
				products: [
					// {
					// 	productType,
					// 	productImage,
					// 	productImageType,
					// 	productId,
					// 	quantity,
					// 	name,
					// 	price,
					// },
					{
						product: productId,
						quantity,
					},
				],
			})
		} else {
			// const existingProduct = cart.products.find(
			// 	product => product.productId.toString() === productId.toString()
			// )
			const existingProduct = cart.products.find(
				product => product.product._id.toString() === productId.toString()
			)
			if (existingProduct) {
				existingProduct.quantity += quantity
			} else {
				cart.products.push({
					product: productId,
					quantity,
					// productType,
					// productImage,
					// productImageType,
					// productId,
					// quantity,
					// name,
					// price,
				})
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
	  const products = await cart.populate({
		path: 'products.product',
		select: 'title price coverImagePath coverImage coverImageType',
		options: {
			
		}
	  })
  
	  res.status(200).json(products.products) // Returns only the products
	} catch (error) {
	  res.status(500).json({ message: 'Error fetching cart', error })
	}
  }

export const removeProductFromCart = async (req: Request, res: Response) => {
	const { userId, productId } = req.query

	if (!userId || !productId) {
		return res.status(400).json({ message: 'User ID or product ID are missing' })
	}
	try {
		// const cart = await Cart.findOne({ userId })
		let cart = await Cart.findOne({ userId }).populate('products.product', '_id')

		if (!cart) {
			return res.status(404).json({ message: 'Cart not found' })
		}

		const updatedProducts = cart.products.filter(
			product => product.product._id.toString() !== productId.toString()
		)
		cart.products = updatedProducts

		await cart.save()
		res.status(200).json(cart)
	} catch (error) {
		res.status(500).json({ message: 'Error removing product from cart', error })
	}
}

export const clearCart = async (req: Request, res: Response) => {
	const userId = req.query.userId
	if (!userId) {
		return res.status(400).json({ message: 'User ID is required' })
	}
	try {
		const cart = await Cart.findOneAndUpdate({ userId }, { products: [] }, { new: true })

		if (!cart) {
			return res.status(404).json({ message: 'Cart not found' })
		}

		res.status(200).json({ message: 'Cart cleared successfully' })
	} catch (error) {
		res.status(500).json({ message: 'Error clearing cart', error })
	}
}
