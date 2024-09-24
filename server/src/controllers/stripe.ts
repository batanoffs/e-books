import { query, Request, Response } from 'express'
import { validationResult } from 'express-validator'
import Book from '../models/Book'
import Order from '../models/Order'
import Cart from '../models/Cart'

export interface Product {
	id: string
	quantity: number
}

const Stripe = require('stripe')
const stripe = Stripe(process.env.STRIPE_PRIVATE_KEY)

export const checkoutSession = async (req: Request, res: Response) => {
	const validationErrors = validationResult(req)
	if (!validationErrors.isEmpty())
		return res.status(400).json({ errors: validationErrors.array() })

	const { products, userId } = req.body

	if (!products) return res.status(404).json({ message: 'No products found!' })
	if (!userId) return res.status(404).json({ message: 'No user id found!' })

	try {
		let notFoundProducts: string[] = []

		const StripeProducts = await Promise.all(
			products.map(async (product: Product) => {
				const current = await stripe.products.retrieve(product.id)
				//TODO implement check for not found
				console.log(current)

				if (!current) {
					notFoundProducts.push(product.id)
				} else {
					return current
				}
			})
		)

		if (notFoundProducts.length > 0) {
			const productsToCreate = await Promise.all(
				notFoundProducts.map(async (id: string) => {
					const item = await Book.findById(id).lean().exec()

					if (!item)
						return res
							.status(400)
							.json({ message: `No product found in the database!` })

					return {
						name: item.title,
						active: true,
						description: item.description,
						id: item._id.toHexString(),
						images: [item.picture],
						default_price_data: {
							currency: 'bgn',
							unit_amount: item.price * 100,
						},
						metadata: {
							author: item.author,
							cover_page: item.coverPageType,
							publisher: item.publisher,
							page_count: item.pageCount,
							dimensions: item.dimensions,
						},
					}
				})
			)

			if (!productsToCreate)
				return res
					.status(400)
					.json({ message: 'No products with those ids found in the database!' })

			await Promise.all(
				productsToCreate.map(async (product: any) => {
					const response = await stripe.products.create(product)
					if (response.status === 200) {
						StripeProducts.push(response)
					}
				})
			)
		}

		const productPriceIds = StripeProducts.map(product => {
			return {
				price: product.default_price,
				quantity: 1, //TODO get actual quantity
			}
		})

		const session = await stripe.checkout.sessions.create({
			client_reference_id: userId,
			customer_email: 'mixrays@mailfence.com', //TODO save userdata state and provide email here
			line_items: productPriceIds,
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

		res.json({ url: session.url })
	} catch (e) {
		res.status(500).json({ error: (e as Error).message })
	}
}

export const getPaymentSessionAndCreateOrder = async (req: Request, res: Response) => {
	const { session_id } = req.query

	if (!session_id) return res.status(400).json({ message: 'Invalid session_id' })

	try {
		const getSession = await stripe.checkout.sessions.retrieve(session_id, {
			expand: ['line_items'], //'payment_intent.payment_method'
		})

		const userId = getSession.client_reference_id
		const boughtProducts = getSession.line_items.data.map((item: any) => {
			return {
				productId: item.price.product,
				productType: 'Book', //TODO update for diff product types
				quantity: item.quantity,
			}
		})
		const status = getSession.status
		const total = getSession.amount_total / 100

		console.log('data', status, total, userId, boughtProducts)

		if (status === 'complete') {
			const existingOrder = await Order.findOne({
				userId,
				'products.productId': { $in: boughtProducts.map((bp: any) => bp.productId) },
			})

			if (existingOrder) {
				return res.status(200).json({
					message: 'Order already exists',
					createdOrder: existingOrder.populate('products.productId'),
				})
			}

			const newOrder = new Order({ userId, products: boughtProducts, total })

			await newOrder.save()

			const cart = await Cart.findOneAndUpdate({ userId }, { products: [] }, { new: true })
			console.log('cart', cart)

			if (!cart) {
				return res.status(404).json({ message: 'Cart not found' })
			}

			res.status(201).json({
				message: `Successful payment, new order created`,
				createdOrder: newOrder.populate('products.productId'),
			})
		} else {
			res.status(401).json({
				message: `Order status: ${status}`,
			})
		}
	} catch (error) {
		res.status(500).json({ message: 'Error creating order', error })
	}
}
