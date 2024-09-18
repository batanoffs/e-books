import { Request, Response } from 'express'
import { validationResult } from 'express-validator'
import Book from '../models/Book'
import Order from '../models/Order'

export interface CartItem {
	id: string
	quantity: number
}

const Stripe = require('stripe')
const stripe = Stripe(process.env.STRIPE_PRIVATE_KEY)

export const checkoutSession = async (req: Request, res: Response) => {
	const validationErrors = validationResult(req)

	if (!validationErrors.isEmpty()) {
		return res.status(400).json({ errors: validationErrors.array() })
	}

	try {
		const products = await Promise.all(
			req.body.products.map(async (product: CartItem) => {
				const item = await Book.findById(product.id).lean().exec()
				return {
					data: item,
					quantity: product.quantity,
				}
			})
		)
		const productIds = products.map((product: any) => product.data._id)
		console.log('productIds', productIds)

		const stripeInput = await products.map((product: any) => {
			return {
				price_data: {
					currency: 'bgn',
					product_data: {
						name: product.data.title,
						images: [product.data.picture],
						metadata: {
							productId: product.data._id,
						},
					},
					unit_amount: product.data.price * 100,
				},
				quantity: product.quantity,
			}
		})

		const session = await stripe.checkout.sessions.create({
			payment_method_types: ['card'],
			mode: 'payment',
			success_url: `${process.env.CLIENT_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
			cancel_url: `${process.env.CLIENT_URL}/checkout`,
			line_items: stripeInput,
			metadata: {
				productIds: productIds,
			},
			client_reference_id: req.body.userId,
			customer_email: 'pesho@abv.bg', //TODO save userdata state and provide email here
			locale: 'bg',
			shipping_address_collection: {
				allowed_countries: ['BG'],
			},
		})

		res.json({ url: session.url })
		// res.send({ clientSecret: session.client_secret })
	} catch (e) {
		res.status(500).json({ error: (e as Error).message })
	}
}

//TODO research how to link this logic
export const getPaymentSessionAndCreateOrder = async (req: Request, res: Response) => {
	const { session_id } = req.query

	if (!session_id) return res.status(400).json({ message: 'Invalid session_id' })

	try {
		const result = Promise.all([
			stripe.checkout.sessions.retrieve(session_id, {
				expand: ['payment_intent.payment_method'],
			}),
			stripe.checkout.sessions.listLineItems(session_id),
		])

		const token = await result
		const tokenString = JSON.stringify(await result)

		console.log(tokenString)

		// const userId = token[0].client_reference_id
		// const products = token[1].data.map((item: any) => item.metadata._id) //TODO fix or item.price.metadata._id
		// const status = token[0].status
		// const total = token[0].amount_total

		// console.log('orderData', { userId, products, total, status })

		// const newOrder = new Order({ userId, products, total, status })

		// console.log('newOrder', newOrder)

		// await newOrder.save()

		// res.status(201).json(newOrder)

		// const { userId, items, total, status } = req.body
		// try {
		// 	const newOrder = new Order({ userId, items, total, status })
		// 	await newOrder.save()
		// 	res.status(201).json(newOrder)
		// } catch (error) {
		// 	res.status(500).json({ message: 'Error creating order', error })
		// }

		// res.send({
		// 	status: session.status,
		// 	customer_email: session.customer_details.email,
		// })
		// res.redirect(process.env.CLIENT_URL + '/success?session_id=' + req.query.session_id)
		console.log('Payment successfully processed.')
	} catch (error) {
		console.log(error)
	}
}
