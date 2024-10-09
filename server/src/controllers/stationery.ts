import { Request, Response, NextFunction } from 'express'
import Stationery from '../models/Stationery'

export const getStationeries = async (
	req: Request,
	res: Response,
	next: NextFunction
): Promise<void> => {
	try {
		const products = await Stationery.find().populate('categories').lean()
		if (!products) {
			res.status(404).json({ message: 'Products not found' })
			return
		}
		res.status(200).json(products)
	} catch (error) {
		res.status(500).json({ message: 'Error fetching stationeries', error })
	}
}

export const getStationeryById = async (
	req: Request,
	res: Response,
	next: NextFunction
): Promise<void> => {
	try {
		const { id } = req.params

		if (!id) {
			res.status(404).json({ message: 'No product id provided' })
			return
		}

		const product = await Stationery.findById(id).lean()

		if (!product) {
			res.status(404).json({ message: 'Product not found' })
			return
		}

		res.status(200).json(product)
	} catch (error) {
		res.status(500).json({ message: 'Server error' })
	}
}
