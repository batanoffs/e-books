import Modal from '@mui/material/Modal'
import { usePrivacyModal } from '../../store/helperModal'

const PrivacyRulesModal = () => {
	const open = usePrivacyModal((state) => state.open)
	const toggleOpen = usePrivacyModal((state) => state.toggleOpen)

	const styles = {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		padding: '20px',
		backgroundColor: '#fff',
		borderRadius: '0.3125em',
		boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
		position: 'fixed',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
	}

	return (
		<Modal open={open} onClose={toggleOpen}>
			<div style={styles}>
				<h2>Политика за поверителност</h2>
				<p>
					Това са политиките за поверителност, които сте се запознали с. Ще събираме
					вашата информация за целите на нашата платформа. Вашите данни не бяха
					предоставени на трети страни. Ще ги ползваме само за целите на нашата платформа.
				</p>
			</div>
		</Modal>
	)
}

export default PrivacyRulesModal

