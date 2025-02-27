import { useSnackbar, SnackbarOrigin } from 'notistack'
import { AlertProps } from '@mui/material'

export const useAlert = () => {
	const { enqueueSnackbar, closeSnackbar } = useSnackbar()

	const showAlert = (
		message: string,
		severity: AlertProps['severity'] = 'info',
		duration: number = 2000
	) => {
		enqueueSnackbar(message, {
			variant: severity,
			autoHideDuration: duration,
			anchorOrigin: { vertical: 'top', horizontal: 'right' } as SnackbarOrigin,
			style: { marginTop: '80px' },
		})
	}

	return { showAlert, closeSnackbar }
}
