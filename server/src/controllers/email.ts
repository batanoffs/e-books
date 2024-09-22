import { Request, Response } from 'express'
import MailerLite from '@mailerlite/mailerlite-nodejs'
import { AxiosError } from 'axios'

const mailerlite = new MailerLite({
	api_key: `${process.env.MAILERLITE_API_TOKEN}`,
})

type Status = 'unconfirmed' | 'active' | 'unsubscribed' | 'bounced' | 'junk' | undefined

export const AddSubscriberToNewsLetter = async (req: Request, res: Response) => {
	const { newsLetterEmail } = req.body

	try {
		const myNewsLetterGroupId = '133087498496640175'
		const params = {
			email: newsLetterEmail,
			groups: [myNewsLetterGroupId],
			status: 'active' as Status,
			subscribed_at: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
			unsubscribed_at: undefined,
		}

		const response = await mailerlite.subscribers.createOrUpdate(params)

		console.log('response', response.data)
		if (response.status !== 200) {
			res.status(response.status).send(response.statusText)
		}
		res.status(200).send('Успешно се абонирахте за нашия бюлетин')
	} catch (error) {
		if (error instanceof AxiosError) {
			console.log(error.response?.data)
		}
	}
}
