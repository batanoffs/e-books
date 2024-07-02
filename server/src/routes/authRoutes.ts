const express = require('express');

import { Request, Response } from 'express';
import { body } from 'express-validator';

import { register, login } from '../controllers/authController';
import { isGuest } from '../middlewares/guards';

const router = express.Router();

router.post('/register', isGuest(),
    [
        body('email').trim().notEmpty().isEmail().isLength({ min: 10 }).withMessage('Email is required'),
        body('password').trim().isLength({ min: 6 }).withMessage('Password must be at least 8 characters'),
        body('repass').trim().custom((value, { req }) => value == req.body.password).withMessage("Passwords don't match"),
        body('role').trim().custom((value) => value === 'user' || value === 'admin').withMessage('Role must be user or admin'),
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

router.get('/logout', (req: Request, res: Response) => {
    res.clearCookie('token');
    res.redirect('/');
});

export default router; 
