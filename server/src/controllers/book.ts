import { Request, Response } from 'express'
import Book from '../models/Book'
import { validationResult } from 'express-validator'
import saveCover from '../utils/saveCover'

// Create a book with image handling
export const createBook = async (req: Request, res: Response) => {
	const errors = validationResult(req)

	if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() })

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
		coverPageType: req.body.coverPageType,
	})
	saveCover(newBook, req.body.cover)

	console.log(newBook)

	try {
		await newBook.save()
		res.status(201).json(newBook)
	} catch (error) {
		res.status(500).json({ message: 'Error creating book', error })
	}
}

export const getBooks = async (req: Request, res: Response) => {
	try {
		const books = await Book.find()
		res.status(200).json(books)
	} catch (error) {
		res.status(500).json({ message: 'Error fetching books', error })
	}
}

export const getBookById = async (req: Request, res: Response) => {
	const { id } = req.params
	try {
		const book = await Book.findById(id)
		if (!book) {
			return res.status(404).json({ message: 'Book not found' })
		}
		res.status(200).json(book)
	} catch (error) {
		res.status(500).json({ message: 'Error fetching book', error })
	}
}

// Update a book by ID
export const updateBook = async (req: Request, res: Response) => {
	const { id } = req.params
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
		coverPageType: req.body.coverPageType,
	})
	saveCover(newBook, req.body.cover)

	try {
		const updatedBook = await Book.findByIdAndUpdate(id, { newBook }, { new: true })
		if (!updatedBook) {
			return res.status(404).json({ message: 'Book not found' })
		}
		res.status(200).json(updatedBook)
	} catch (error) {
		res.status(500).json({ message: 'Error updating book', error })
	}
}

export const deleteBook = async (req: Request, res: Response) => {
	const { id } = req.params
	try {
		const deletedBook = await Book.findByIdAndDelete(id)
		if (!deletedBook) {
			return res.status(404).json({ message: 'Book not found' })
		}
		res.status(200).json({ message: 'Book deleted successfully' })
	} catch (error) {
		res.status(500).json({ message: 'Error deleting book', error })
	}
}
