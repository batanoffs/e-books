import { Request, Response, NextFunction } from 'express'
import Stationery from '../models/Stationery'

export const getStationeries = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const products = await Stationery.find()
		if (!products.length) {
			res.status(202).json(products)
		}
		res.status(200).json(products)
	} catch (error) {
		res.status(500).json({ message: `Error ${error}` })
	}
}

export const getStationeryById = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { id } = req.params

		if (!id) {
			res.status(404).json({ message: 'No product id provided' })
		}

		const product = await Stationery.findById(id).lean()

		console.log(product)

		if (!product) {
			res.status(404).json({ message: 'Product not found' })
		}

		res.status(200).json(product)
	} catch (error) {
		res.status(500).json({ message: 'Server error' })
	}
}
