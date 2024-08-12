import { Request, Response } from 'express'
import { validationResult } from 'express-validator'
import { ALLOWED_ADDRESS as YOUR_DOMAIN } from '../constants/serverSetup'
import { stripeTestAPI } from '../constants/identity'

const stripe = require('stripe')(stripeTestAPI)

export const checkoutSession = async (req: Request, res: Response) => {
	const session = await stripe.checkout.sessions.create({
		ui_mode: 'embedded',
		line_items: [
			{
				// Provide the exact Price ID (for example, pr_1234) of the product you want to sell
				price: 'price_1PmyVQRsXEpCIyS4m1foSRUP',
				quantity: 1,
			},
		],
		mode: 'payment',
		return_url: `${YOUR_DOMAIN}/return?session_id={CHECKOUT_SESSION_ID}`,
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
