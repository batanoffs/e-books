import { List, Datagrid, TextField, DateField } from 'react-admin'

const UserList = (props: any) => (
	<List {...props} title={'Списък с потребители'}>
		<Datagrid rowClick='edit'>
			<TextField source='email' label='Имейл' />
			<TextField source='role' label='Роля' />
			<DateField source='register_date' label='Дата на регистрация' />
            <DateField source='last_login' label='Последно влизане' />
            <TextField source='id' label='Потребителско ID (Идентификатор)' />
		</Datagrid>
	</List>
)

export default UserList
