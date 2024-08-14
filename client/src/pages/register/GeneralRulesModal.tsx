import Modal from '@mui/material/Modal'

import { useTermsModal } from '../../store/helperModal'

export const GeneralRulesModal = ({ styles }) => {
	const open = useTermsModal((state) => state.open)
	const toggleOpen = useTermsModal((state) => state.toggleOpen)

	return (
		<Modal open={open} onClose={toggleOpen}>
			<div className={styles.modalContent}>
				<h2>Общи условия</h2>
				<p>Това са общите условия, които сте се запознали с.</p>
			</div>
		</Modal>
	)
}
