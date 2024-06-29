import { Router } from 'express';
import { createBook, getBooks, getBookById, updateBook, deleteBook } from '../controllers/bookController';
import { body } from 'express-validator';
import validateRequest from '../middlewares/validateRequest';

const router = Router();

router.post(
  '/',
  [
    body('title').notEmpty().withMessage('Title is required'),
    body('author').notEmpty().withMessage('Author is required'),
    body('price').isFloat({ gt: 0 }).withMessage('Price must be a positive number'),
    body('description').notEmpty().withMessage('Description is required'),
    body('stock').isInt({ gt: 0 }).withMessage('Stock must be a positive integer'),
    validateRequest
  ],
  createBook
);

router.get('/', getBooks);
router.get('/:id', getBookById);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);

export default router;
