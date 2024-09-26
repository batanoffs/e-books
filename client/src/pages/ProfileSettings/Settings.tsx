import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { TextField, Button } from '@mui/material'
import useAlertStore from '../../store/alert'

interface FormInputs {
	password: string
	newPassword: string
}

const Settings = () => {
	const {
		register,
		handleSubmit,
		setError,
		formState: { errors },
	} = useForm<FormInputs>()
	const [profilePicture, setProfilePicture] = useState<File | null>(null)
	const showAlert = useAlertStore((state) => state.showAlert)

	const handleProfilePictureChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files && event.target.files[0]
		if (file) {
			setProfilePicture(file)
		}
	}

	const handleProfilePictureUpload = async () => {
		if (!profilePicture) {
			showAlert('No file selected', 'warning')
			return
		}

		try {
			// await uploadProfilePicture(profilePicture)
			showAlert('Profile picture updated', 'success')
		} catch (error) {
			console.error(error)
			showAlert('Error updating profile picture', 'error')
		}
	}

	const onSubmit: SubmitHandler<FormInputs> = async (data) => {
		try {
			// await user.updatePassword(data.password, data.newPassword)
			showAlert('Password updated', 'success')
		} catch (error) {
			console.error(error)
			showAlert('Error updating password', 'error')
		}
	}

	return (
		<Box>
			<Typography variant='h5' gutterBottom>
				Настройки
			</Typography>
			<List>
				<ListItem>
					<ListItemText primary='Промяна на парола' />
				</ListItem>

				{/* Password Change Form */}
				<Box component='form' onSubmit={handleSubmit(onSubmit)} sx={{ mb: 4 }}>
					<TextField
						fullWidth
						type='password'
						label='Стара парола'
						{...register('password', { required: 'Старата парола е задължителна' })}
						error={!!errors.password}
						helperText={errors.password?.message}
						margin='normal'
					/>
					<TextField
						fullWidth
						type='password'
						label='Нова парола'
						{...register('newPassword', { required: 'Нова парола е задължителна' })}
						error={!!errors.newPassword}
						helperText={errors.newPassword?.message}
						margin='normal'
					/>
					<Button type='submit' variant='contained' sx={{ mt: 2 }}>
						Запиши
					</Button>
				</Box>

				<ListItem>
					<ListItemText primary='Промени имейл' />
				</ListItem>

				<ListItem>
					<ListItemText primary='Промени телефонен номер' />
				</ListItem>

				{/* Profile Picture Upload */}
				<ListItem>
					<ListItemText primary='Промени профилна снимка' />
					<input type='file' accept='image/*' onChange={handleProfilePictureChange} />
					<Button onClick={handleProfilePictureUpload} variant='contained' sx={{ ml: 2 }}>
						Upload
					</Button>
				</ListItem>
			</List>
		</Box>
	)
}

export default Settings
