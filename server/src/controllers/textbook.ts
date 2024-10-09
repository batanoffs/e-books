import { NextFunction, Request, Response } from 'express'
import Textbook from '../models/Textbook'

export const getTextbooks = async (
	req: Request,
	res: Response,
	next: NextFunction
): Promise<void> => {
	try {
		const Textbooks = await Textbook.find().populate('categories').lean()
		res.status(200).json(Textbooks)
	} catch (error) {
		res.status(500).json({ message: 'Error fetching books', error })
	}
}

export const getTextbookById = async (
	req: Request,
	res: Response,
	next: NextFunction
): Promise<void> => {
	const { id } = req.params
	try {
		const textbook = await Textbook.findById(id)
		if (!textbook) {
			res.status(404).json({ message: 'Book not found' })
			return
		}
		res.status(200).json(textbook)
	} catch (error) {
		res.status(500).json({ message: 'Error fetching book', error })
	}
}

// export const updateTextbook = async (
// 	req: Request,
// 	res: Response,
// 	next: NextFunction
// ): Promise<void> => {
// 	const { id } = req.params
// 	const { title, author, price, description, stock, categories, imageUrl } = req.body
// 	try {
// 		const textbook = await Textbook.findByIdAndUpdate(
// 			id,
// 			{ title, author, price, description, stock, categories, imageUrl },
// 			{ new: true }
// 		)
// 		if (!textbook) {
// 			res.status(404).json({ message: 'Book not found' })
// 			return
// 		}
// 		res.status(200).json(textbook)
// 	} catch (error) {
// 		res.status(500).json({ message: 'Error updating book', error })
// 	}
// }

// export const deleteTextbook = async (
// 	req: Request,
// 	res: Response,
// 	next: NextFunction
// ): Promise<void> => {
// 	const { id } = req.params
// 	try {
// 		const textbook = await Textbook.findByIdAndDelete(id)
// 		if (!textbook) {
// 			res.status(404).json({ message: 'Book not found' })
// 			return
// 		}
// 		res.status(200).json({ message: 'Book deleted successfully' })
// 	} catch (error) {
// 		res.status(500).json({ message: 'Error deleting book', error })
// 	}
// }

// export const createTextbook = async (
// 	req: Request,
// 	res: Response,
// 	next: NextFunction
// ): Promise<void> => {
// 	const { title, author, price, description, stock, categories, imageUrl } = req.body
// 	try {
// 		const newTextBook = new Textbook({
// 			title,
// 			author,
// 			price,
// 			description,
// 			stock,
// 			categories,
// 			imageUrl,
// 		})
// 		await newTextBook.save()
// 		res.status(201).json(newTextBook)
// 	} catch (error) {
// 		res.status(500).json({ message: 'Error creating book', error })
// 	}
// }
