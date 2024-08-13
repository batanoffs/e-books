import { Request, Response } from 'express'
import { validationResult } from 'express-validator'

const stripe = require('stripe')(process.env.STRIPE_TEST_API)

export const checkoutSession = async (req: Request, res: Response) => {
	const errors = validationResult(req)

	if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() })

	const { items } = req.body

	if (!items) return res.status(400).json({ error: 'No products provided' })

	console.log('items', items)

	const session = await stripe.checkout.sessions.create({
		ui_mode: 'embedded',
		// Provide the exact Price ID (for example, pr_1234) of the product you want to sell
		// {
		// 	// Provide the exact Price ID (for example, pr_1234) of the product you want to sell
		// 	price: 'pr_1234',
		// 	quantity: 1,
		// },
		line_items: items,
		mode: 'payment',
		return_url: `${process.env.ALLOWED_ADDRESS}/return?session_id={CHECKOUT_SESSION_ID}`,
	})

	res.send({ clientSecret: session.client_secret })
}

export const getPaymentSessionStatus = async (req: Request, res: Response) => {
	const session = await stripe.checkout.sessions.retrieve(req.query.session_id)

	res.send({
		status: session.status,
		customer_email: session.customer_details.email,
	})
}
