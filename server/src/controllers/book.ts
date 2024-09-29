import { Request, Response, NextFunction } from 'express'
import Book from '../models/Book'
import { validationResult } from 'express-validator'

// Create a book with image handling
export const createBook = async (
	req: Request,
	res: Response,
	next: NextFunction
): Promise<void> => {
	const errors = validationResult(req)

	if (!errors.isEmpty()) {
		res.status(400).json({ errors: errors.array() })
		return
	}

	const newBook = new Book({
		title: req.body.title,
		author: req.body.author,
		price: req.body.price,
		description: req.body.description,
		stock: req.body.stock,
		categories: req.body.categories,
		publisher: req.body.publisher,
		language: req.body.language,
		publishDate: req.body.yearPublished,
		pageCount: req.body.pages,
		translator: req.body.translator,
		dimensions: req.body.dimensions,
		picture: req.body.picture,
	})

	console.log(newBook)

	try {
		await newBook.save()
		res.status(201).json(newBook)
	} catch (error) {
		res.status(500).json({ message: 'Error creating book', error })
	}
}

export const getBooks = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const books = await Book.find().lean()
		res.status(200).json(books)
	} catch (error) {
		res.status(500).json({ message: 'Error fetching books', error })
	}
}

export const getBookById = async (
	req: Request,
	res: Response,
	next: NextFunction
): Promise<void> => {
	const { id } = req.params
	try {
		const book = await Book.findById(id).lean()
		if (!book) {
			res.status(404).json({ message: 'Book not found' })
			return
		}
		res.status(200).json(book)
	} catch (error) {
		res.status(500).json({ message: 'Error fetching book', error })
	}
}

// Update a book by ID
export const updateBook = async (
	req: Request,
	res: Response,
	next: NextFunction
): Promise<void> => {
	const { id } = req.params
	console.log('categories', req.body.categories)

	if (!id) {
		res.status(400).json({ message: 'Book ID is required' })
		return
	}

	const newBook = new Book({
		title: req.body.title,
		author: req.body.author,
		price: req.body.price,
		description: req.body.description,
		stock: req.body.stock,
		categories: req.body.categories,
		publisher: req.body.publisher,
		language: req.body.language,
		publishDate: req.body.publishDate,
		pageCount: req.body.pages,
		translator: req.body.translator,
		dimensions: req.body.dimensions,
		picture: req.body.picture,
	})

	try {
		const updatedBook = await Book.findByIdAndUpdate(id, { $set: newBook }, { new: true })

		if (!updatedBook) {
			res.status(404).json({ message: 'Book not found' })
			return
		}

		res.status(200).json(updatedBook)
	} catch (error) {
		res.status(500).json({ message: 'Error updating book', error })
	}
}

export const deleteBook = async (
	req: Request,
	res: Response,
	next: NextFunction
): Promise<void> => {
	const { id } = req.params
	try {
		const deletedBook = await Book.findByIdAndDelete(id)
		if (!deletedBook) {
			res.status(404).json({ message: 'Book not found' })
			return
		}
		res.status(200).json({ message: 'Book deleted successfully' })
	} catch (error) {
		res.status(500).json({ message: 'Error deleting book', error })
	}
}
