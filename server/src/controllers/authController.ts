const { validationResult } = require('express-validator');

import { Request, Response } from 'express-serve-static-core';
import { createToken } from '../services/jwt';
import { loginUser, registerUser } from '../services/user';

const register = async (req: Request, res: Response) => {
    const { email, password, role } = req.body;

    try {
        const validation = validationResult(req);

        if (validation.errors.length) {
            throw validation.errors;
        }

        const user = await registerUser(email, password, role);
        const token = createToken(user);

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
            path: '/', // restrict cookie to specific path
        });

        const redirectUrl = user.role === 'admin' ? '/admin/dashboard' : '/';
        res.status(200).json({ message: 'User registered successfully', token, redirectUrl });
    } catch (error) {
        res.status(500).json({ message: 'Registration failed', error });
    }
};

const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        const validation = validationResult(req);

        if (validation.errors.length) {
            throw validation.errors;
        }

        const user = await loginUser(email, password);
        const token = createToken(user);

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
            path: '/' || '/admin/dashboard', // restrict cookie to specific path
        });

        const redirectUrl = user.role === 'admin' ? '/admin/dashboard' : '/';

        res.status(200).json({ message: 'Login successful', token, redirectUrl });
    } catch (error) {
        res.status(500).json({ message: 'Login failed', error });
    }
};

const logout = (req: Request, res: Response) => {
    const redirectUrl = '/';

    res.clearCookie('token', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        path: '/', // restrict cookie to specific path
    });

    res.status(200).json({ message: 'Logout successful', redirectUrl });
};

export { register, login, logout };
