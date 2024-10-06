import { DetailsLayoutProps } from '../../../interfaces/layout.interface'
import styles from './details.module.scss'

export const DetailsLayout = ({ children, header, aside }: DetailsLayoutProps) => {
	return (
		<main className='main-wrapper'>
			<header>{header}</header>
			<article className={styles.detailsContainer}>
				<aside>{aside}</aside>
				<section>{children}</section>
			</article>
		</main>
	)
}
