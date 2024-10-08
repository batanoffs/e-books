import { ProfileLayoutProps } from '../../../interfaces/layout.interface'
import styles from '../catalog/dashboard.module.scss'

export const ProfileLayout = ({ children, aside }: ProfileLayoutProps) => {
	return (
		<main className='main-wrapper'>
			<div className={styles.dashboardContainer}>
				<aside>{aside}</aside>
				<section>{children}</section>
			</div>
		</main>
	)
}
