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
				<div className={styles.info}>
					<b>Important note</b>
					<p>Initial server startup may take up to 50 sec or more</p>
					<a
						href='https://www.youtube.com/watch?v=0UT5XTyFcRU'
						target='_blank'
						rel='noreferrer'
						title='Project Demo'
					>
						📺 Check out the project demo on YouTube
					</a>
				</div>
			</div>
		</div>
	)
}
