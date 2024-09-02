import { Router } from 'express'
import raExpressMongoose from 'express-mongoose-ra-json-server'

import { isAdmin } from '../middlewares/guards'
import Book from '../models/Book'
import User from '../models/User'
import Order from '../models/Order'
import Featured from '../models/Featured'
import Stationery from '../models/Stationery'
import Textbook from '../models/Textbook'
import BookCategories from '../models/BookCategories'
import TextbookCategories from '../models/TextbookCategories'
import StationeryCategories from '../models/StationeryCategories'

const router = Router()

//TODO fix admin guard
router.use(isAdmin)

router.use('/users', raExpressMongoose(User, { q: ['email', 'role'], useLean: false }))

router.use(
	'/categories/books',
	raExpressMongoose(BookCategories, {
		q: ['_id', 'name', 'createdAt', 'updatedAt'],
		useLean: false,
	})
)

router.use(
	'/categories/textbooks',
	raExpressMongoose(TextbookCategories, {
		q: ['_id', 'name', 'createdAt', 'updatedAt'],
		useLean: false,
	})
)
router.use(
	'/categories/stationery',
	raExpressMongoose(StationeryCategories, {
		q: ['_id', 'name', 'createdAt', 'updatedAt'],
		useLean: false,
	})
)

router.use(
	'/stationery',
	raExpressMongoose(Stationery, {
		q: [
			'title',
			'price',
			'description',
			'coverImage',
			'coverImageType',
			'stock',
			'categories',
			'createdAt',
		],
	})
)

router.use(
	'/books',
	raExpressMongoose(Book, {
		q: [
			'title',
			'author',
			'price',
			'description',
			'picture',
			'stock',
			'categories',
			'publisher',
			'language',
			'publishDate',
			'pageCount',
			'translator',
			'dimensions',
			'createdAt',
		],
		useLean: true,
	})
)

router.use(
	'/textbooks',
	raExpressMongoose(Textbook, {
		q: [
			'title',
			'author',
			'price',
			'description',
			'coverImage',
			'coverImageType',
			'stock',
			'categories',
			'publisher',
			'language',
			'publishDate',
			'pageCount',
			'translator',
			'dimensions',
			'coverPageType',
			'createdAt',
		],
	})
)

router.use(
	'/featured',
	raExpressMongoose(Featured, {
		q: ['title', 'title', 'author', 'price', 'description', 'imageUrl', 'stock', 'category'],
	})
)

router.use('/orders', raExpressMongoose(Order, { q: ['userId', 'products', 'total', 'status'] }))

export default router
