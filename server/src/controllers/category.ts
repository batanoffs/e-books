import { Request, Response } from 'express'
import Categories from '../models/Category'

//TODO add validation if user is admin, if not reject status 401 Not Authorized

export const addCategory = async (req: Request, res: Response) => {
	const { categoryType, name } = req.body

	if (!['books', 'textbooks', 'stationery'].includes(categoryType)) {
		return res.status(400).json({ message: 'Invalid category type' })
	}

	try {
		const update = { $addToSet: { [categoryType]: name } } // $addToSet ensures no duplicates
		const categories = await Categories.findOneAndUpdate({}, update, {
			new: true,
			upsert: true,
		})
		res.json({ message: 'Category added successfully', categories })
	} catch (error) {
		res.status(500).json({ message: 'Error adding category item', error })
	}
}

//Need query type=category, maybe add more
export const getCategoriesByType = async (req: Request, res: Response) => {
	const { type } = req.params

	if (!['books', 'textbooks', 'stationery'].includes(type)) {
		return res.status(400).json({ message: 'Invalid category type' })
	}

	try {
		const categories = await Categories.findOne({}, { [type]: 1, _id: 0 })
		if (categories) {
			if (type === 'books' || type === 'textbooks' || type === 'stationery') {
				res.json(categories[type])
			} else {
				if (!['books', 'textbooks', 'stationery'].includes(type)) {
					return res.status(400).json({ message: 'Invalid category type' })
				}
			}
		} else {
			res.status(404).json({ message: 'No categories found' })
		}
	} catch (error) {
		res.status(500).json({ message: 'Error fetching categories', error })
	}
}

export const getAll = async (req: Request, res: Response) => {
	try {
		const categories = await Categories.find().lean().exec()
		res.json(categories[0])
	} catch (error) {
		res.status(500).json({ message: 'Error fetching categories', error })
	}
}
