import {
	Edit,
	SimpleForm,
	TextInput,
	SelectInput,
	DateField,
	TextField,
	SimpleShowLayout,
} from 'react-admin'
import { useState } from 'react'
import { Button } from '@mui/material'

const UserEdit = (props) => {
	const [emailEnabled, setEmailEnabled] = useState(false)
	const [roleEnable, setRoleEnable] = useState(false)

	const emailEnableHandler = () => {
		setEmailEnabled((prev) => !prev)
	}

	const roleEnableHandler = () => {
		setRoleEnable((prev) => !prev)
	}

	return (
		<Edit {...props} title={'Списък с потребители'}>
			<SimpleShowLayout>
				<TextField label='Потребителско ID (Идентификатор)' source='id' />
				<DateField source='register_date' label='Регистриран на:' />
			</SimpleShowLayout>
			<SimpleForm>
				<div>
					<TextInput source='email' label='Имейл' disabled={!emailEnabled} />
					<Button
						type='button'
						variant='contained'
						onClick={emailEnableHandler}
						color='primary'
					>
						{!emailEnabled ? 'Активирай полето' : 'Затворирай полето'}
					</Button>
				</div>
				<TextInput source='password' label='Парола' disabled />
				<div>
					<SelectInput
						source='role'
						label='Роля'
						choices={[
							{ id: 'user', name: 'User' },
							{ id: 'admin', name: 'Admin' },
						]}
						disabled={!roleEnable}
					/>
					<Button
						type='button'
						variant='contained'
						onClick={roleEnableHandler}
						color='primary'
					>
						{!roleEnable ? 'Активирай полето' : 'Затворирай полето'}
					</Button>
				</div>
			</SimpleForm>
		</Edit>
	)
}

export default UserEdit
