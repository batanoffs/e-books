import { Request, Response } from 'express'

import { getCategoryModel } from '../utils/checkCategoryType'
import BookCategories from '../models/BookCategories'

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

export const fetchAllTypesOfCategories = async (req: Request, res: Response) => {
	try {
		const categories = await BookCategories.aggregate([
			// Add a category type to the documents from the BookCategories collection
			{
				$addFields: { categoryType: 'books' }
			},
			// Union with the TextbookCategories collection
			{
				$unionWith: {
					coll: 'textbookcategories',
					pipeline: [
						{ $addFields: { categoryType: 'textbooks' } }
					]
				}
			},
			// Union with the StationeryCategories collection
			{
				$unionWith: {
					coll: 'stationerycategories',
					pipeline: [
						{ $addFields: { categoryType: 'stationeries' } }
					]
				}
			},
			// Group the results by category type and aggregate them into arrays
			{
				$group: {
					_id: null,
					books: {
						$push: {
							$cond: [{ $eq: ["$categoryType", "books"] }, "$$ROOT", null]
						}
					},
					textbooks: {
						$push: {
							$cond: [{ $eq: ["$categoryType", "textbooks"] }, "$$ROOT", null]
						}
					},
					stationeries: {
						$push: {
							$cond: [{ $eq: ["$categoryType", "stationeries"] }, "$$ROOT", null]
						}
					}
				}
			},
			// Remove null values from the arrays
			{
				$project: {
					books: { $filter: { input: "$books", as: "item", cond: { $ne: ["$$item", null] } } },
					textbooks: { $filter: { input: "$textbooks", as: "item", cond: { $ne: ["$$item", null] } } },
					stationeries: { $filter: { input: "$stationeries", as: "item", cond: { $ne: ["$$item", null] } } }
				}
			}
		])

		// Since $group results in an array with one document, access it
		res.json(categories[0] || { books: [], textbooks: [], stationeries: [] })
	} catch (error) {
		res.status(500).json({ error: 'Error fetching categories' })
	}
}
