import Modal from '@mui/material/Modal'
import { usePrivacyModal } from '../../store/helperModal'

const PrivacyRulesModal = ({ styles }) => {
	const open = usePrivacyModal((state) => state.open)
	const toggleOpen = usePrivacyModal((state) => state.toggleOpen)

	return (
		<Modal open={open} onClose={toggleOpen}>
			<div className={styles.modalContent}>
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
