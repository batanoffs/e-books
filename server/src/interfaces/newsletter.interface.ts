export interface NewsLetterSchemaTypes extends Document{
	email: string
	status: 'subscribed' | 'unsubscribed'
	createdAt: Date
}
