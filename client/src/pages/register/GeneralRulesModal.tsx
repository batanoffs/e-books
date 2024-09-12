import Modal from '@mui/material/Modal'

import { useTermsModal } from '../../store/helperModal'

const GeneralRulesModal = () => {
	const open = useTermsModal((state) => state.open)
	const toggleOpen = useTermsModal((state) => state.toggleOpen)

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
				<h2>Общи условия</h2>
				<p>Това са общите условия, които сте се запознали с.</p>
			</div>
		</Modal>
	)
}
export default GeneralRulesModal
