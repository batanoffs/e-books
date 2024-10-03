import { NextFunction, Request, Response } from 'express'
import { validationResult } from 'express-validator'
import Book from '../models/Book'
import Order from '../models/Order'
import Cart from '../models/Cart'
import mongoose from 'mongoose'

export interface Product {
	id: string
	quantity: number
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

	// console.log('Passing those products to save in Stripe DB:', products)

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
				const productDB = await Book.findById(product.id).lean().exec()

				if (!productDB) {
					await newSession.abortTransaction()
					return res
						.status(404)
						.json({ message: 'No product found with id ' + product.id + '!' })
				}

				const searchResponse = await stripe.products.search({
					query: `name:"${productDB?.title}"`,
				})
				// console.log('checkStripeDB:', searchResponse)

				if (searchResponse.data.length === 0) {
					const productObjStripe = {
						name: productDB.title,
						active: true,
						description: productDB.description,
						id: productDB._id.toHexString(),
						images: [productDB.picture],
						default_price_data: {
							currency: 'bgn',
							unit_amount: productDB.price * 100,
						},
						metadata: {
							author: productDB.author,
							cover_page: productDB.coverPageType,
							publisher: productDB.publisher,
							page_count: productDB.pageCount,
							dimensions: productDB.dimensions,
						},
					}

					const createStripeProduct = await stripe.products.create(productObjStripe)
					// console.log(`New Stripe Product created with id: ${product.id}`)
					// console.log(`New Stripe Product data: ${createStripeProduct}`)
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
			cancel_url: `${process.env.CLIENT_URL}/checkout`,
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

		if (stripeSessionResponse.status !== 'complete') {
			await transactionSession.abortTransaction()
			res.status(404).json({
				message: `Stripe session with id ${session_id} status is not complete ${stripeSessionResponse.status}`,
			})
			return
		}

		const userId = stripeSessionResponse.client_reference_id
		const boughtProducts = stripeSessionResponse.line_items.data.map((item: any) => {
			return {
				productId: item.price.product,
				productType: 'Book', //TODO update for diff product types
				quantity: item.quantity,
			}
		})

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
