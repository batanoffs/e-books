import { Request, Response } from 'express'
import Categories from '../models/Categories'

//TODO add validation if user is admin, if not reject status 401 Not Authorized

export const addCategory = async (req: Request, res: Response) => {
	const { categoryType, name } = req.body

	// Log what the request contains
	console.log('Received:', { categoryType, name })

	if (!['book', 'textbook', 'stationery'].includes(categoryType)) {
		return res.status(400).json({ message: 'Invalid category type' })
	}

	try {
		if (!name || !categoryType) {
			return res.status(400).json({ message: 'Name and categoryType are required' })
		}

		const existingCategory = await Categories.findOne({ name, categoryType })
		if (existingCategory) {
			return res.status(400).json({ message: 'Category already exists' })
		}

		const category = new Categories({ name, categoryType })
		await category.save()

		res.json({ message: 'Category added successfully', category })
	} catch (error) {
		console.error('Error adding category:', error)
		res.status(500).json({ message: 'Error adding category item', error })
	}
}

export const getCategoriesByType = async (req: Request, res: Response) => {
	const { type } = req.params

	// Check if the type is valid
	if (!['book', 'textbook', 'stationery'].includes(type)) {
		return res.status(400).json({ message: 'Invalid category type' })
	}

	try {
		// Fetch categories by type
		const categories = await Categories.find({ categoryType: type }).lean().exec()

		if (categories.length > 0) {
			res.json(categories)
		} else {
			res.status(404).json({ message: 'No categories found for this type' })
		}
	} catch (error) {
		res.status(500).json({ message: 'Error fetching categories', error })
	}
}

export const getAll = async (req: Request, res: Response) => {
	try {
		// Fetch all categories
		const categories = await Categories.find().lean().exec()
		res.json(categories)
	} catch (error) {
		res.status(500).json({ message: 'Error fetching categories', error })
	}
}
