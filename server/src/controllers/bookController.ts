import { Request, Response } from 'express';
import Book from '../models/Book';

export const createBook = async (req: Request, res: Response) => {
  const { title, author, price, description, stock } = req.body;
  try {
    const newBook = new Book({ title, author, price, description, stock });
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ message: 'Error creating book', error });
  }
};

export const getBooks = async (req: Request, res: Response) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching books', error });
  }
};

export const getBookById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching book', error });
  }
};

export const updateBook = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, author, price, description, stock } = req.body;
  try {
    const book = await Book.findByIdAndUpdate(
      id,
      { title, author, price, description, stock },
      { new: true }
    );
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: 'Error updating book', error });
  }
};

export const deleteBook = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const book = await Book.findByIdAndDelete(id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.status(200).json({ message: 'Book deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting book', error });
  }
};
