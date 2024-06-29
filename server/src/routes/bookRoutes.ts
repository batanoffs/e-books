import { Router } from 'express';
import { createBook, getBooks, getBookById, updateBook, deleteBook } from '../controllers/bookController';
import { body } from 'express-validator';
import validateRequest  from '../middlewares/validateRequest';

const router = Router();

router.post(
  '/',
  [
    body('title').notEmpty().isLength({ min: 2 }).withMessage('Title is required'),
    body('author').notEmpty().withMessage('Author is required'),
    body('price').isFloat({ gt: 0 }).withMessage('Price must be a positive number'),
    body('description').notEmpty().isLength({ min: 10 }).withMessage('Description min 10 characters'),
    body("imageUrl").trim().isURL({ require_tld: false }).withMessage("image must start with http:// or https://"),
    body('stock').isInt({ gt: 0 }).withMessage('Stock must be a positive integer'),
    body('category').notEmpty().isLength({ min: 3 }).withMessage('Category is required'),
    validateRequest
  ],
  createBook
);

router.get('/', getBooks);
router.get('/:id', getBookById);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);

export default router;
