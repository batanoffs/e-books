const express = require("express");

import { register, login } from '../controllers/authController';
import bookRoutes from './bookRoutes';
import orderRoutes from './orderRoutes';
import userRoutes from './userRoutes';
import { body } from 'express-validator';

const router = express.Router();

router.post(
  '/register',
  [
    body('username').notEmpty().withMessage('Username is required'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  ],
  register
);

router.post(
  '/login',
  [
    body('username').notEmpty().withMessage('Username is required'),
    body('password').notEmpty().withMessage('Password is required'),
  ],
  login
);

router.use('/books', bookRoutes);
router.use('/orders', orderRoutes);
router.use('/users', userRoutes);

export default router;
