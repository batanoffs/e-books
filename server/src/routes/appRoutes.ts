const express = require('express');
import { body } from 'express-validator';

import { register, login } from '../controllers/authController';
import bookRoutes from './bookRoutes';
import orderRoutes from './orderRoutes';
import userRoutes from './userRoutes';
import { isGuest } from '../middlewares/guards';

const router = express.Router();

router.post('/register', isGuest(),
    [
        body('email').trim().notEmpty().isEmail().isLength({ min: 10 }).withMessage('Email is required'),
        body('password').trim().isLength({ min: 6 }).withMessage('Password must be at least 8 characters'),
        body('repass').trim().custom((value, { req }) => value == req.body.password).withMessage("Passwords don't match"),
    ],
    register
);

router.post('/login', isGuest(),
    [
        body('username').trim().notEmpty().withMessage('Username is required'),
        body('password').trim().notEmpty().withMessage('Password is required'),
    ],
    login
);

router.use('/books', bookRoutes);
router.use('/orders', orderRoutes);
router.use('/users', userRoutes);

export default router;

