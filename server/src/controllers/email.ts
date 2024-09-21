import { Request, Response } from 'express'
import MailerLite from '@mailerlite/mailerlite-nodejs'
import { AxiosError } from 'axios'

const mailerlite = new MailerLite({
	api_key: `${process.env.MAILERLITE_API_TOKEN}`,
})

type Status = 'unconfirmed' | 'active' | 'unsubscribed' | 'bounced' | 'junk' | undefined

export const GetNewsletterSubscriber = async (req: Request, res: Response) => {
	const { newsLetterEmail } = req.body

	const info = {
		limit: 25,
		page: 1,
		filter: {
			name: 'newsletter',
		},
		sort: 'name' as const,
	}

	try {
		const getGroup = await mailerlite.groups.get(info)
		const groupId = getGroup.data.data[0].id
		if (!groupId) {
			res.status(404).json({ message: 'Group not found' })
		}
		const params = {
			email: newsLetterEmail,
			groups: [groupId],
			status: 'unconfirmed' as Status,
			subscribed_at: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
			unsubscribed_at: undefined, // yyyy-MM-dd HH:mm:ss
		}
		const response = await mailerlite.subscribers.createOrUpdate(params)
		console.log(response)

		// res.send()
	} catch (error) {
		if (error instanceof AxiosError) {
			console.log(error.response?.data)
		}
	}
}

//example params

// const params = {
// 	email: 'dummy@example.com',
// 	fields: {
// 		name: 'Dummy',
// 		last_name: 'Testerson',
// 		company: 'MailerLite',
// 		country: 'Best country',
// 		city: 'Best city',
// 		phone: '37060677606',
// 		state: 'Best state',
// 		z_i_p: '99999',
// 	},
// 	groups: ['4243829086487936'],
// 	status: 'active', // possible statuses: active, unsubscribed, unconfirmed, bounced or junk.
// 	subscribed_at: '2021-08-31 14:22:08',
// 	ip_address: null,
// 	opted_in_at: null, // yyyy-MM-dd HH:mm:ss
// 	optin_ip: null,
// 	unsubscribed_at: null, // yyyy-MM-dd HH:mm:ss
// }
