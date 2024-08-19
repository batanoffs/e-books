import { create } from 'zustand'
import { AlertColor } from '@mui/material'

// Define the types for the alert state and actions
interface AlertState {
	message: string
	severity: AlertColor
	open: boolean
	duration: number
	showAlert: (message: string, severity?: AlertColor, duration?: number) => void
	hideAlert: () => void
}

// Create the Zustand store
const useAlertStore = create<AlertState>((set) => ({
	message: '',
	severity: 'info',
	open: false,
	duration: 1000,
	showAlert: (message, severity = 'info', duration = 6000) =>
		set({ message, severity, duration, open: true }),
	hideAlert: () => set({ open: false }),
}))

export default useAlertStore
