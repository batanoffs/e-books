import { Router } from 'express';
import { createBook, updateBook, deleteBook } from '../controllers/bookController';
import { getUsers, updateUser, deleteUser } from '../controllers/userController';
import { getOrders, updateOrder, deleteOrder } from '../controllers/orderController';
import { isAdmin } from '../middlewares/guards';
import { body } from 'express-validator';
import validateRequest from '../middlewares/validateRequest';

const router = Router();

router.use(isAdmin);

router.post(
  '/books',
  [
    body('title').notEmpty().withMessage('Title is required'),
    body('author').notEmpty().withMessage('Author is required'),
    body('price').isFloat({ gt: 0 }).withMessage('Price must be a positive number'),
    body('description').notEmpty().withMessage('Description is required'),
    body('stock').isInt({ gt: 0 }).withMessage('Stock must be a positive integer'),
    validateRequest,
  ],
  createBook
);
router.put('/books/:id', updateBook);
router.delete('/books/:id', deleteBook);

router.get('/users', getUsers);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

router.get('/orders', getOrders);
router.put('/orders/:id', updateOrder);
router.delete('/orders/:id', deleteOrder);

export default router;
