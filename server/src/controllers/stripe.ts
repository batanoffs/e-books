import { NextFunction, Request, Response } from 'express'
import { validationResult } from 'express-validator'
import Book from '../models/Book'
import Order from '../models/Order'
import Cart from '../models/Cart'
import mongoose, { Model } from 'mongoose'
import Stationery from '../models/Stationery'
import Textbook from '../models/Textbook'
import { IBookSchema } from '../interfaces/book.interface'
import { ITextbookSchema } from '../interfaces/textbook.interface'
import { IStationerySchema } from '../interfaces/stationery.interface'

export interface Product {
	id: string
	quantity: number
	productType: 'Book' | 'Textbook' | 'Stationery'
}

const Stripe = require('stripe')
const stripe = Stripe(process.env.STRIPE_PRIVATE_KEY)

export const checkoutSession = async (
	req: Request,
	res: Response,
	next: NextFunction
): Promise<void> => {
	const { products } = req.body
	const user = req.user

	if (!user) {
		res.status(401).json({ message: 'Not authorized' })
		return
	}

	const { id: userId, email } = user
	const validationErrors = validationResult(req)
	const newSession = await mongoose.startSession()

	try {
		await newSession.startTransaction()

		if (!validationErrors.isEmpty()) {
			await newSession.abortTransaction()
			res.status(400).json({ errors: validationErrors.array() })
			return
		}

		if (!products && !userId && !email) {
			await newSession.abortTransaction()
			res.status(404).json({ message: 'No products or user found!' })
			return
		}

		const orderedProducts = await Promise.all(
			products.map(async (product: Product) => {
				const model =
					product.productType === 'Book'
						? Book
						: product.productType === 'Textbook'
						? Textbook
						: Stationery

				const productDB = await (
					model as Model<IBookSchema | ITextbookSchema | IStationerySchema>
				)
					.findById(product.id)
					.lean()
					.exec()

				if (!productDB) {
					await newSession.abortTransaction()
					return res
						.status(404)
						.json({ message: 'No product found with id ' + product.id + '!' })
				}

				// TODO find other way bulletproof
				const searchResponse = await stripe.products.search({
					query: `name:"${productDB?.title}"`,
				})

				if (searchResponse.data.length === 0) {
					const price = Math.round(productDB.price * 100)

					const productObjStripe = {
						name: productDB.title,
						active: true,
						description: productDB.description,
						id: productDB._id.toHexString(),
						images: [productDB.picture],
						default_price_data: {
							currency: 'bgn',
							unit_amount: price,
						},
						metadata: {
							// author?: productDB.author,
							// publisher?: productDB.publisher,
							// page_count?: productDB.pageCount,
							// dimensions?: productDB.dimensions,
							productType: product.productType,
						},
					}

					const createStripeProduct = await stripe.products.create(productObjStripe)
					return {
						price: createStripeProduct.default_price,
						quantity: product.quantity,
					}
				}

				const match = searchResponse.data.find((entry: any) => entry.id === product.id)

				return {
					price: match.default_price,
					quantity: product.quantity,
				}
			})
		)

		const session = await stripe.checkout.sessions.create({
			client_reference_id: userId,
			customer_email: email,
			line_items: orderedProducts,
			mode: 'payment',
			success_url: `${process.env.CLIENT_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
			cancel_url: `${process.env.CLIENT_URL}/checkout?cancelled=true`,
			payment_method_types: ['card'],
			locale: 'bg',
			custom_text: {
				after_submit: {
					message: 'Благодарим!',
				},
				shipping_address: {
					message: 'Вашият адрес за доставка е този тук :)',
				},
				submit: {
					message: 'Вашата поръчка е защитена благодарение на Stripe!',
				},
				// terms_of_service_acceptance: {
				// 	message: '',
				// },
			},
			shipping_address_collection: {
				allowed_countries: ['BG'],
			},
			shipping_options: [
				{
					shipping_rate_data: {
						display_name: 'Econt',
						delivery_estimate: {
							maximum: {
								unit: `business_day`,
								value: 3,
							},
							minimum: {
								unit: `business_day`,
								value: 1,
							},
						},
						fixed_amount: {
							amount: 500,
							currency: 'BGN',
						},
						type: 'fixed_amount',
					},
				},
				{
					shipping_rate_data: {
						display_name: 'Speedy',
						delivery_estimate: {
							maximum: {
								unit: `business_day`,
								value: 3,
							},
							minimum: {
								unit: `business_day`,
								value: 1,
							},
						},
						fixed_amount: {
							amount: 500,
							currency: 'BGN',
						},
						type: 'fixed_amount',
					},
				},
			],
			invoice_creation: {
				enabled: true,
			},
			after_expiration: {
				recovery: {
					enabled: true,
					// allow_promotion_codes: true,
				},
			},
			// allow_promotion_codes: true,
			// discounts: [
			// 	{
			// 		coupon: '',
			// 		promotion_code: '',
			// 	},
			// ],
		})
		await newSession.commitTransaction()
		res.json({ url: session.url, message: 'Checkout session created successfully' })
	} catch (error) {
		await newSession.abortTransaction()
		res.status(500).json({ error: (error as Error).message })
	} finally {
		await newSession.endSession()
	}
}

export const getPaymentSessionAndCreateOrder = async (
	req: Request,
	res: Response,
	next: NextFunction
): Promise<void> => {
	const { session_id } = req.query
	const validationErrors = validationResult(req)
	const transactionSession = await mongoose.startSession()

	try {
		await transactionSession.startTransaction()

		if (!validationErrors.isEmpty()) {
			await transactionSession.abortTransaction()
			res.status(400).json({ errors: validationErrors.array() })
			return
		}
		if (!session_id) {
			await transactionSession.abortTransaction()
			res.status(404).json({ message: 'Missing session id' })
			return
		}

		const existingOrder = await Order.findOne({ sessionId: session_id }).populate(
			'products.productId'
		)
		if (existingOrder) {
			// If order exists, return it without creating a new one
			await transactionSession.commitTransaction()
			res.status(200).json(existingOrder) // Send the existing order
			return
		}
		const stripeSessionResponse = await stripe.checkout.sessions.retrieve(session_id, {
			expand: ['line_items'], //'payment_intent.payment_method'
		})

		console.log('session response', stripeSessionResponse.line_items.data)

		if (stripeSessionResponse.status !== 'complete') {
			await transactionSession.abortTransaction()
			res.status(404).json({
				message: `Stripe session with id ${session_id} status is not complete ${stripeSessionResponse.status}`,
			})
			return
		}

		const userId = stripeSessionResponse.client_reference_id

		const getProductTypeFromId = async (id: string) => {
			const book = await Book.findById(id)
			if (book) return 'Book'

			const textbook = await Textbook.findById(id)
			if (textbook) return 'Textbook'

			const stationery = await Stationery.findById(id)
			if (stationery) return 'Stationery'

			await transactionSession.abortTransaction()
			res.status(404).json({ message: 'Products not found' })
			return
		}
		// const boughtProducts = stripeSessionResponse.line_items.data.map(
		// 	async (item: { price: { product: string }; quantity: number }) => {
		// 		const productId = item.price.product
		// 		const productType = await getProductTypeFromId(productId)

		// 		return {
		// 			productType,
		// 			productId,
		// 			quantity: item.quantity,
		// 		}
		// 	}
		// )

		const boughtProducts = await Promise.all(
			stripeSessionResponse.line_items.data.map(
				async (item: { price: { product: string }; quantity: number }) => {
					const productId = item.price.product
					const productType = await getProductTypeFromId(productId)

					return {
						productType,
						productId,
						quantity: item.quantity,
					}
				}
			)
		)

		console.log('Products bought with added type:', boughtProducts)

		const newOrder = new Order({
			userId,
			products: boughtProducts,
			total: stripeSessionResponse.amount_total / 100,
			shippingStatus: 'pending',
			paymentStatus: stripeSessionResponse.status,
			shipping_details: stripeSessionResponse.shipping_details,
			customer_details: stripeSessionResponse.customer_details,
			sessionId: session_id,
		})

		const order = await newOrder.save()
		const populatedOrder = await order.populate('products.productId')

		const cart = await Cart.findOneAndUpdate({ userId }, { products: [] }, { new: true })

		if (!cart) {
			await transactionSession.abortTransaction()
			res.status(404).json({ message: 'Cart not found for user with id ' + userId + '!' })
			return
		}

		await transactionSession.commitTransaction()

		res.status(201).json(populatedOrder)
	} catch (error) {
		await transactionSession.abortTransaction()
		res.status(500).json({ error: (error as Error).message })
		return
	} finally {
		await transactionSession.endSession()
	}
}
