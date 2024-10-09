import { Router } from 'express'

import { getBooks, getBookById } from '../controllers/book' //createBook, deleteBook
import { uploadCoverImage } from '../controllers/images'
import upload from '../middlewares/multer'
// import validateRequest from '../middlewares/validateRequest'
// import { body } from 'express-validator'

const router = Router()

router.get('/', getBooks)
router.get('/:id', getBookById)
//@ts-ignore
router.post('/upload', upload.single('picture'), uploadCoverImage)

export default router

// router.post(
// 	'/',
// 	[
// 		body('title').notEmpty().isLength({ min: 2 }).withMessage('Title is required'),
// 		body('author').notEmpty().withMessage('Author is required'),
// 		body('price').isFloat({ gt: 0 }).withMessage('Price must be a positive number'),
// 		body('description')
// 			.notEmpty()
// 			.isLength({ min: 10 })
// 			.withMessage('Description min 10 characters'),
// 		body('categories').notEmpty().isLength({ min: 3 }).withMessage('Categories are required'),
// 		body('coverPageType').notEmpty().withMessage('Cover page type is required'),
// 		body('dimensions').isLength({ min: 1 }).withMessage('Dimensions is required'),
// 		body('language').notEmpty().withMessage('Language is required'),
// 		body('pageCount').isNumeric().withMessage('Pages must be a positive integer'),
// 		body('publisher').notEmpty().withMessage('Publisher is required'),
// 		body('stock').isInt({ gt: 0 }).withMessage('Stock must be a positive integer'),
// 		body('translator').notEmpty().withMessage('Translator is required'),
// 		body('publishDate').isDate().withMessage('Year published is required'),
// 		validateRequest,
// 	],
// 	createBook
// )


// router.delete('/:id', deleteBook)