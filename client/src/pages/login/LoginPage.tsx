import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Link from '@mui/material/Link'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

import { useLoginModal } from '../../store/helperModal'
import { authService } from '../../services/authService'
import { useAlertStore } from '../../store/alert'

import styles from './login-page.module.scss'

const LoginModal = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const open = useLoginModal((state) => state.open)
	const toggleOpen = useLoginModal((state) => state.toggleOpen)
	const showAlert = useAlertStore((state) => state.showAlert)
	const navigate = useNavigate()

	const handleLogin = async (e: React.FormEvent) => {
		e.preventDefault()
		try {
			const { redirectUrl, message } = await authService.login(email, password)
			toggleOpen()
			navigate(redirectUrl)
			showAlert(message, 'success')
		} catch (error) {
			showAlert('Невалиден имейл или парола', 'error')
		}
	}

	return (
		<Modal
			open={open}
			onClose={toggleOpen}
			aria-labelledby='simple-modal-title'
			aria-describedby='simple-modal-description'
		>
			<div className={styles.paper}>
				<Typography variant='subtitle2' id='modal-title'>
					Вход
				</Typography>
				<form className={styles.form} onSubmit={handleLogin}>
					<TextField
						autoFocus
						margin='dense'
						id='name'
						label='Имейл'
						type='email'
						fullWidth
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
					<TextField
						margin='dense'
						id='name'
						label='Парола'
						type='password'
						fullWidth
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
					<Button
						type='submit'
						variant='contained'
						color='primary'
						className={styles.button}
					>
						Вход
					</Button>
					<Link href='/register' underline='hover' variant='inherit'>
						Нямаш акаунт? Регистрирай се.
					</Link>
					<Link href='/zabravena-parola' underline='hover'>
						Забравена парола?
					</Link>
				</form>
			</div>
		</Modal>
	)
}

export default LoginModal
