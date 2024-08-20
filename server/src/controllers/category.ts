import { Request, Response } from 'express'
import Category from '../models/Category'

export const addCategory = async (req: Request, res: Response) => {
	const { categoryType, name } = req.body

	if (!['books', 'textbooks', 'stationery'].includes(categoryType)) {
		return res.status(400).json({ message: 'Invalid category type' })
	}

	try {
		const update = { $addToSet: { [categoryType]: name } } // $addToSet ensures no duplicates
		const category = await Category.findOneAndUpdate({}, update, { new: true, upsert: true })
		res.json({ message: 'Category updated successfully', category })
	} catch (error) {
		res.status(500).json({ message: 'Error adding category item', error })
	}
}

export const getCategoriesByType = async (req: Request, res: Response) => {
	const { type } = req.query

	if (!['books', 'textbooks', 'stationery'].includes(type as string)) {
		return res.status(400).json({ message: 'Invalid category type' })
	}

	try {
		const categories = await Category.findOne({}, { [type as string]: 1, _id: 0 })
		if (categories) {
			res.json(categories[type as keyof typeof categories])
		} else {
			res.status(404).json({ message: 'No categories found' })
		}
	} catch (error) {
		res.status(500).json({ message: 'Error fetching categories', error })
	}
}
