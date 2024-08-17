// import { useState } from 'react'
// import { Snackbar, Alert, AlertColor } from '@mui/material'

// interface AlertOptions {
// 	message: string
// 	severity?: AlertColor
// 	duration?: number
// }

// export const useAlert = () => {
// 	const [alertOpen, setAlertOpen] = useState(false)
// 	const [alertOptions, setAlertOptions] = useState<AlertOptions>({
// 		message: '',
// 		severity: 'info',
// 		duration: 6000,
// 	})

// 	const showAlert = (options: AlertOptions) => {
// 		setAlertOptions({ severity: 'info', duration: 6000, ...options })
// 		setAlertOpen(true)
// 	}

// 	const handleClose = () => {
// 		setAlertOpen(false)
// 	}

// 	const AlertComponent = () => (
// 		<Snackbar open={alertOpen} autoHideDuration={alertOptions.duration} onClose={handleClose}>
// 			<Alert onClose={handleClose} severity={alertOptions.severity} sx={{ width: '100%' }}>
// 				{alertOptions.message}
// 			</Alert>
// 		</Snackbar>
// 	)

// 	return { showAlert, AlertComponent }
// }
