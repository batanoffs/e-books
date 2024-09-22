import Modal from '@mui/material/Modal'
import { usePrivacyModal } from '../../store/helperModal'
import { Box } from '@mui/material'

const PrivacyRulesModal = () => {
	const open = usePrivacyModal((state) => state.open)
	const toggleOpen = usePrivacyModal((state) => state.toggleOpen)

	return (
		<Modal open={open} onClose={toggleOpen}>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					flexDirection: 'column',
					justifyContent: 'center',
					padding: '20px',
					backgroundColor: '#fff',
					borderRadius: '0.3125em',
					boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
					position: 'fixed',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
				}}
			>
				<h2>Политика за поверителност</h2>
				<p>
					Целта на тази политика за поверителност е да Ви информира за начина, по който
					ние колективно събираме, използваме и разкриваме информация за вас при
					използване на нашата платформа. Ние се ангажираме да защитаваме вашата
					поверителност и да я използваме само за целите, за които е предназначена.
				</p>
			</Box>
		</Modal>
	)
}

export default PrivacyRulesModal
