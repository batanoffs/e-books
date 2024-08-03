import React from 'react'
import { Show, SimpleShowLayout, TextField, DateField } from 'react-admin'

const UserShow: React.FC = (props) => (
	<Show {...props}>
		<SimpleShowLayout>
			<TextField label='Потребителско ID (Идентификатор)' source='id' />
			<TextField label='Имейл' source='email' />
			<TextField label='Роля' source='role' />
			<TextField label='Парола' source='password' />
			<DateField source='last_login' label='Последно влизане' />

			<DateField label='Дата на регистрация' source='register_date' />
		</SimpleShowLayout>
	</Show>
)

export default UserShow
