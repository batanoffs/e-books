import { Model } from 'mongoose'
import BookCategories from '../models/BookCategories'
import TextbookCategories from '../models/TextbookCategories'
import StationeryCategories from '../models/StationeryCategories'
/**
 * Returns the category model based on the category type.
 *
 * @param {string} categoryType - The type of category (e.g. books, textbooks, stationery).
 * @returns {Model} The category model.
 */
export const getCategoryModel = (categoryType: string): Model<any> => {
	switch (categoryType) {
		case 'books':
			return BookCategories
		case 'textbooks':
			return TextbookCategories
		case 'stationery':
			return StationeryCategories
		default:
			throw new Error(`Unknown category type: ${categoryType}`)
	}
}