import React from 'react'
import useSpinner from '../../store/spinner'
import styles from './spinner.module.scss'

export const GlobalSpinner: React.FC = () => {
	const isLoading = useSpinner((state) => state.isLoading)

	if (!isLoading) return null

	return (
		<div className={styles.spinnerOverlay}>
			<div className={styles.loading}>
				<h1>Loading...</h1>
				<div className={styles.spinner} />
				<div>
					<b>Important note:</b>
					<p>
						The application uses a FREE tier hosting plan. Initial server startup may
						take up to 30 seconds.
					</p>
				</div>
			</div>
		</div>
	)
}
