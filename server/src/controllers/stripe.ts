import { Request, Response } from 'express'
import { validationResult } from 'express-validator'
import Book from '../models/Book'

export interface CartItem {
	id: string
	quantity: number
}

const Stripe = require('stripe')

export const checkoutSession = async (req: Request, res: Response) => {
	const stripe = Stripe(process.env.STRIPE_PRIVATE_KEY)
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

		const stripeInput = await products.map((product: any) => {
			return {
				price_data: {
					currency: 'bgn',
					product_data: {
						name: product.data.title ?? '',
						images: [product.data.picture],
					},
					unit_amount: product.data.price * 100 ?? 0,
				},
				quantity: product.quantity,
			}
		})

		const session = await stripe.checkout.sessions.create({
			payment_method_types: ['card'],
			mode: 'payment',
			success_url: `${process.env.CLIENT_URL}/success`,
			cancel_url: `${process.env.CLIENT_URL}/checkout`,
			line_items: stripeInput,
		})

		res.json({ url: session.url })
	} catch (e) {
		res.status(500).json({ error: (e as Error).message })
	}
}
// import { Request, Response } from 'express'
// import { validationResult } from 'express-validator'

// const stripe = require('stripe')(process.env.STRIPE_TEST_API)
// const storeItems = new Map ([
// 	[1, {priceInStotinki: 10000, name: 'Kniga 1'}],
// 	[2, {priceInStotinki: 15000, name: 'Kniga 2'}],
// ])
// export const checkoutSession = async (req: Request, res: Response) => {
// 	const validationErrors = validationResult(req)
// 	if (!validationErrors.isEmpty()) return res.status(400).json({ errors: errors.array() })

// 	try {
// 		const session = await stripe.checkout.sessions.create({
// 			payment_method_types: ['card'],
// 			mode: 'payment',
// 			success_url: `${process.env.CLIENT_URL}/success`,
// 			cancel_url: `${process.env.CLIENT_URL}/checkout`,
// 			line_items: req.body.items.map(item => {
// 				const storeItem = storeItems.get(item.id)
// 				return {
// 					price_data: {
// 						currency: 'bgn',
// 						product_data: {
// 							name: storeItem.name,
// 						},
// 						unit_amount: storeItem.priceInStotinki,
// 					},
// 					quantity: item.quantity,
// 				}
// 			}),
// 		})

// 		res.json({ url: session.url })

// 	} catch (e) {
// 		res.status(500).json({ error: e.message })
// 	}
// }

// res.send({ clientSecret: session.client_secret })

// export const getPaymentSessionStatus = async (req: Request, res: Response) => {
// 	const session = await stripe.checkout.sessions.retrieve(req.query.session_id)

// 	res.send({
// 		status: session.status,
// 		customer_email: session.customer_details.email,
// 	})
// }
