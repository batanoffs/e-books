import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Link from '@mui/material/Link'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'

import { useLoginModal } from '../../store/helperModal'
import authService from '../../services/authService'
import { useAlert } from '../../hooks/useAlert'
import DEMO_USERS from './demoUsers'

import styles from './login-page.module.scss'

export const LoginModal = () => {
	// Define form state
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	// Get hooks to manage modal alert and navigation
	const open = useLoginModal((state) => state.open)
	const toggleOpen = useLoginModal((state) => state.toggleOpen)
	
	const { showAlert } = useAlert()
	const navigate = useNavigate()

	// Define handlers
	const handleLogin = async (e: React.FormEvent) => {
		e.preventDefault()
		try {
			const response = await authService.login(email, password)
			if (!response) throw new Error('Response data is empty')

			const { redirectUrl, message } = response

			toggleOpen()
			navigate(redirectUrl)
			showAlert(message, 'success')
			setEmail('')
			setPassword('')
		} catch (error) {
			showAlert('Невалиден имейл или парола', 'error')
		}
	}

	const handleDemoUsersLogin = async (demoEmail: string, demoPass: string) => {
		try {
			const response = await authService.login(demoEmail, demoPass)
			if (!response) throw new Error('Response data is empty')

			const { redirectUrl, message } = response

			toggleOpen()
			navigate(redirectUrl)
			showAlert(message, 'success')
			setEmail('')
			setPassword('')
		} catch (error) {
			showAlert('Невалиден имейл или парола', 'error')
		}
	}

	const handleRegisterRedirect = (e: React.FormEvent) => {
		e.preventDefault()
		navigate('/register')
		toggleOpen()
	}

	return (
		<Modal
			open={open}
			onClose={toggleOpen}
			aria-labelledby='simple-modal-title'
			aria-describedby='simple-modal-description'
		>
			<Paper className={styles.paper}>
				<Typography variant='subtitle2' color='text.primary' id='modal-title'>
					Вход
				</Typography>
				<form className={styles.form} onSubmit={handleLogin}>
					<TextField
						autoFocus
						margin='dense'
						id='email'
						label='Имейл'
						type='email'
						fullWidth
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
					<TextField
						margin='dense'
						id='password'
						label='Парола'
						type='password'
						fullWidth
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
					<Button type='submit' variant='contained' color='primary'>
						Вход
					</Button>
					<Button
						type='submit'
						variant='contained'
						color='primary'
						onClick={(e) =>
							handleDemoUsersLogin(DEMO_USERS.PESHO.EMAIL, DEMO_USERS.PESHO.PASS)
						}
					>
						Login Demo User 1
					</Button>
					<Button
						type='submit'
						variant='contained'
						color='primary'
						onClick={(e) =>
							handleDemoUsersLogin(DEMO_USERS.IVO.EMAIL, DEMO_USERS.IVO.PASS)
						}
					>
						Login Demo User 2
					</Button>
					<Link
						onClick={handleRegisterRedirect}
						underline='hover'
						color={'text.primary'}
						style={{ cursor: 'pointer' }}
						variant='inherit'
					>
						Нямаш акаунт? Регистрирай се.
					</Link>

					<Link href='#' color={'text.primary'} underline='hover'>
						Забравена парола?
					</Link>
				</form>
			</Paper>
		</Modal>
	)
}
