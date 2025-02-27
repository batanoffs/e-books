import styles from './footer-bottom.module.scss'

export const FooterBot = () => {
	return (
		<div className={styles.pageFooterBot}>
			<div className={styles.pageFooterBotItemLarge}>
				<span className={styles.copyright}>
					Книжарница „книги бг“ е запазена марка на книжарница "книги бг АД", BG 2024 ©
					книги бг. Всички права запазени.
				</span>
			</div>
			<div className={styles.pageFooterBotItem}>
				<span className={styles.copyright}>
					<span>Дизайн и програмиране</span>
					<a
						href='https://daniel-batanov.onrender.com'
						title='Batanoffs'
						target='_blank'
						rel='noopener noreferrer'
					>
						<img width='59' height='12' src='' alt='batanoffs' />
						<span className={styles.visuallyHidden}>batanoffs</span>
					</a>
				</span>
			</div>
		</div>
	)
}
