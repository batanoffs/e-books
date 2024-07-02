const express = require('express');

import bookRoutes from './bookRoutes';
import orderRoutes from './orderRoutes';
import userRoutes from './userRoutes';
import adminRoutes from './adminRoutes';
import authRoutes from './authRoutes';

const router = express.Router();

router.use(authRoutes);
router.use('/books', bookRoutes);
router.use('/orders', orderRoutes);
router.use('/users', userRoutes);
router.use('/admin', adminRoutes);

export default router;
