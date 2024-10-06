import React from 'react'
import useSpinner from '../../store/spinner'
import styles from './spinner.module.scss'

export const GlobalSpinner: React.FC = () => {
	const isLoading = useSpinner((state) => state.isLoading)

	if (!isLoading) return null

	return (
		<div className={styles.spinnerOverlay}>
			<div className={styles.loading}>
				<div className={styles.spinner} />
			</div>
		</div>
	)
}
