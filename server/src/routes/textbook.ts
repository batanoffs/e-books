import { Router } from 'express';
import { createTextbook, getTextbooks, getTextbookById, updateTextbook, deleteTextbook } from '../controllers/textbook';
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
  createTextbook
);

router.get('/', getTextbooks);
router.get('/:id', getTextbookById);
router.put('/:id', updateTextbook);
router.delete('/:id', deleteTextbook);

export default router;
