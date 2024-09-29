import { Request, Response, NextFunction } from 'express'
import Order from '../models/Order'

export const createOrder = async (req: Request, res: Response, next: NextFunction) => {
	const { userId, items, total, status } = req.body
	try {
		const newOrder = new Order({ userId, items, total, status })
		await newOrder.save()
		res.status(201).json(newOrder)
	} catch (error) {
		res.status(500).json({ message: 'Error creating order', error })
	}
}

export const getOrders = async (req: Request, res: Response, next: NextFunction) => {
	console.log('user id:', req.user?.id)

	try {
		const orders = await Order.find({ userId: req.user?.id })
			.populate('products.productId')
			.lean()
		console.log('found orders', orders)

		res.status(200).json(orders)
	} catch (error) {
		res.status(500).json({ message: 'Error fetching orders', error })
	}
}

export const getOrderById = async (
	req: Request,
	res: Response,
	next: NextFunction
): Promise<void> => {
	const { id } = req.params
	const token = req.headers['authorization']?.split(' ')[1]
	if (!token) {
		res.status(401).json({ message: 'Unauthorized' })
		return
	}
	try {
		const order = await Order.findById(id)
		if (!order) {
			res.status(404).json({ message: 'Order not found' })
			return
		}
		res.status(200).json(order)
	} catch (error) {
		res.status(500).json({ message: 'Error fetching order', error })
	}
}

export const updateOrder = async (
	req: Request,
	res: Response,
	next: NextFunction
): Promise<void> => {
	const { id } = req.params
	const { userId, items, total, status } = req.body
	try {
		const order = await Order.findByIdAndUpdate(
			id,
			{ userId, items, total, status },
			{ new: true }
		)
		if (!order) {
			res.status(404).json({ message: 'Order not found' })
			return
		}
		res.status(200).json(order)
	} catch (error) {
		res.status(500).json({ message: 'Error updating order', error })
	}
}

export const deleteOrder = async (
	req: Request,
	res: Response,
	next: NextFunction
): Promise<void> => {
	const { id } = req.params
	try {
		const order = await Order.findByIdAndDelete(id)
		if (!order) {
			res.status(404).json({ message: 'Order not found' })
			return
		}
		res.status(200).json({ message: 'Order deleted successfully' })
	} catch (error) {
		res.status(500).json({ message: 'Error deleting order', error })
	}
}
