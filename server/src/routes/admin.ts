import { Router } from 'express';
import raExpressMongoose from 'express-mongoose-ra-json-server';

import { isAdmin } from '../middlewares/guards';
import Book from '../models/Book';
import User from '../models/User';
import Order from '../models/Order';
import Featured from '../models/Featured';
import Stationery from '../models/Stationery';
import Textbook from '../models/Textbook';
import saveCover from '../utils/saveCover';

const router = Router();

//TODO fix admin guard
router.use(isAdmin);

router.use('/users', raExpressMongoose(User, { q: ['email', 'role'], useLean: false }));
router.use('/users', raExpressMongoose(User, { q: ['email', 'role'], useLean: false }));
router.use(
    '/items',
    raExpressMongoose(Stationery, {
        q: ['title', 'price', 'description', 'imageUrl', 'stock', 'category'],
    })
);

router.use(
    '/books',
    async (req, res, next) => {
        if (req.method === 'POST' && req.body.cover) {
            saveCover(req.body, req.body.cover);
        }

        if (req.method === 'PUT' && req.body.cover) {
            saveCover(req.body, req.body.cover);
        }
        // try {
        //     const books = await Book.find().lean().exec();
        //     res.json(books);
        // } catch (err) {
        //     next(err);
        // }
        next();
    },
    raExpressMongoose(Book, {
        q: [
            'title',
            'author',
            'price',
            'description',
            'category',
            'coverPageType',
            'cover',
            'coverImagePath',
            'dimensions',
            'language',
            'pageCount',
            'publisher',
            'stock',
            'translator',
            'publishDate',
        ],
        useLean: true,
    })
);
router.use(
    '/textbooks',
    raExpressMongoose(Textbook, {
        q: ['title', 'title', 'author', 'price', 'description', 'imageUrl', 'stock', 'category'],
    })
);
router.use(
    '/featured',
    raExpressMongoose(Featured, {
        q: ['title', 'title', 'author', 'price', 'description', 'imageUrl', 'stock', 'category'],
    })
);
router.use(
    '/orders',
    raExpressMongoose(Order, { q: ['title', 'userId', 'books', 'total', 'status'] })
);

export default router;
