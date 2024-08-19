import { Snackbar, Alert } from '@mui/material'
import useAlertStore from '../../store/alert' // Adjust the path as needed

const GlobalAlert = () => {
	const { message, severity, open, duration, hideAlert } = useAlertStore((state) => ({
		message: state.message,
		severity: state.severity,
		open: state.open,
		duration: state.duration,
		hideAlert: state.hideAlert,
	}))

	return (
		<Snackbar
			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			open={open}
			sx={{ mt: 10 }}
			autoHideDuration={duration}
			onClose={hideAlert}
		>
			<Alert onClose={hideAlert} severity={severity} sx={{ width: '100%' }}>
				{message}
			</Alert>
		</Snackbar>
	)
}

export default GlobalAlert
