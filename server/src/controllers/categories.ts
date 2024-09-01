import { Request, Response } from 'express'

import { getCategoryModel } from '../utils/checkCategoryType'

/**
 * Adds a new category item to the database.
 *
 * @param {Request} req - Express request object.
 * @param {Response} res - Express response object.
 */
export const addCategory = async (req: Request, res: Response) => {
	const {
		body: { name },
	} = req

	const categoryType = req.baseUrl.split('/')[3]
	const categoryModel = getCategoryModel(categoryType)

	if (!name) {
		return res.status(400).json({ message: 'Name is required' })
	}

	try {
		const existingCategory = await categoryModel.findOne({ name })

		if (existingCategory) {
			return res.status(400).json({ message: 'Category already exists' })
		}

		const newCategory = new categoryModel({ name })
		await newCategory.save()
		return res.json({ message: 'Category added successfully', newCategory })
	} catch (error) {
		return res.status(500).json({ message: 'Error adding category item', error })
	}
}

export const getAll = async (req: Request, res: Response) => {
	const categoryType = req.baseUrl.split('/')[3]
	const categoryModel = getCategoryModel(categoryType)
	try {
		// Fetch all categories
		const categories = await categoryModel.find().lean().exec()
		res.json(categories)
	} catch (error) {
		res.status(500).json({ message: 'Error fetching categories', error })
	}
}

//TODO add validation if user is admin, if not reject status 401 Not Authorized

// export const getCategoriesByType = async (req: Request, res: Response) => {
// 	const { type } = req.params

// 	// Check if the type is valid
// 	if (!['book', 'textbook', 'stationery'].includes(type)) {
// 		return res.status(400).json({ message: 'Invalid category type' })
// 	}

// 	try {
// 		// Fetch categories by type
// 		const categories = await BookCategories.find({ categoryType: type }).lean().exec()

// 		if (categories.length > 0) {
// 			res.json(categories)
// 		} else {
// 			res.status(404).json({ message: 'No categories found for this type' })
// 		}
// 	} catch (error) {
// 		res.status(500).json({ message: 'Error fetching categories', error })
// 	}
// }
