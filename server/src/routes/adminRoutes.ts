import { Router } from 'express';
import raExpressMongoose from 'express-mongoose-ra-json-server';

import { isAdmin } from '../middlewares/guards';
import Book from '../models/Book';
import User from '../models/User';
import Order from '../models/Order';
import Featured from '../models/Featured';
import Item from '../models/Item';

const router = Router();


//TODO fix admin guard
router.use(isAdmin);

router.use('/users', raExpressMongoose(User, { q: ['email', 'role'], useLean: false }));
router.use('/items', raExpressMongoose(Item, { q: ['title','price','description','imageUrl','stock','category'] }));
router.use('/books', raExpressMongoose(Book, { q: ['title','title','author','price','description','imageUrl','stock','category'] }));
router.use('/featured', raExpressMongoose(Featured, { q: ['title','title','author','price','description','imageUrl','stock','category'] }));
router.use('/orders', raExpressMongoose(Order, { q: ['title','userId', 'books', 'total', 'status'] }));

export default router;

// import { createBook, updateBook, deleteBook } from '../controllers/bookController';
// import { getUsers, updateUser, deleteUser } from '../controllers/userController';
// import { getOrders, updateOrder, deleteOrder } from '../controllers/orderController';
// import { body } from 'express-validator';
// import validateRequest from '../middlewares/validateRequest';

// router.post(
//   '/books',
//   [
//       body('title').notEmpty().withMessage('Title is required'),
//       body('author').notEmpty().withMessage('Author is required'),
//       body('price').isFloat({ gt: 0 }).withMessage('Price must be a positive number'),
//       body('description').notEmpty().withMessage('Description is required'),
//       body('stock').isInt({ gt: 0 }).withMessage('Stock must be a positive integer'),
//       validateRequest,
//   ],
//   createBook
// );
// router.put('/books/:id', updateBook);
// router.delete('/books/:id', deleteBook);

// router.get('/users', getUsers);
// router.put('/users/:id', updateUser);
// router.delete('/users/:id', deleteUser);

// router.get('/orders', getOrders);
// router.put('/orders/:id', updateOrder);
// router.delete('/orders/:id', deleteOrder);
