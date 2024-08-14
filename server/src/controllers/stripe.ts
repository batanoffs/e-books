import { Request, Response } from 'express'
import { validationResult } from 'express-validator'

interface CartItem {
	id: number
	quantity: number
}

const Stripe = require('stripe')

const storeItems = new Map<number, { priceInStotinki: number; name: string }>([
	[1, { priceInStotinki: 10000, name: 'Kniga 1' }],
	[2, { priceInStotinki: 15000, name: 'Kniga 2' }],
])

export const checkoutSession = async (req: Request, res: Response) => {
	const stripe = Stripe(process.env.STRIPE_PRIVATE_KEY)

	const validationErrors = validationResult(req)

	if (!validationErrors.isEmpty()) {
		return res.status(400).json({ errors: validationErrors.array() })
	}

	try {
		const session = await stripe.checkout.sessions.create({
			payment_method_types: ['card'],
			mode: 'payment',
			success_url: `${process.env.CLIENT_URL}/success`,
			cancel_url: `${process.env.CLIENT_URL}/checkout`,
			line_items: req.body.items.map((item: CartItem) => {
				const storeItem = storeItems.get(item.id)
				return {
					price_data: {
						currency: 'bgn',
						product_data: {
							name: storeItem?.name ?? '',
						},
						unit_amount: storeItem?.priceInStotinki ?? 0,
					},
					quantity: item.quantity,
				}
			}),
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
