import { Router } from 'express'
import raExpressMongoose from 'express-mongoose-ra-json-server'

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

router.use('/users', raExpressMongoose(User, {
		q: ['email', 'role'], 
		useLean: false 
	})
)

router.use('/categories/books', raExpressMongoose(BookCategories, {
		q: ['_id', 'name', 'createdAt', 'updatedAt'],
		useLean: true,
	})
)

router.use('/categories/textbooks', raExpressMongoose(TextbookCategories, {
		q: ['_id', 'name', 'createdAt', 'updatedAt'],
		useLean: false,
	})
)
router.use('/categories/stationery', raExpressMongoose(StationeryCategories, {
		q: ['_id', 'name', 'createdAt', 'updatedAt'],
		useLean: false,
	})
)

router.use('/stationery', raExpressMongoose(Stationery, {
		q: [
			'id',
			'title',
			'price',
			'description',
			'productType',
			'picture',
			'categories',
			'dimensions',
			'stock',
			'createdAt',
		],
		useLean: true,
	})
)

router.use('/books', raExpressMongoose(Book, {
		q: [
			'_id',
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

router.use('/textbooks', raExpressMongoose(Textbook, {
		q: [
			'_id',
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

router.use('/featured', raExpressMongoose(Featured, {
		q: [
			'title', 
			'author', 
			'price', 
			'description', 
			'imageUrl', 
			'stock', 
			'category'
		],
		useLean: true,
	})
)

router.use('/orders', raExpressMongoose(Order, {
		q: ['userId', 'products', 'total', 'status'],
		useLean: true,
 })
)

export default router
