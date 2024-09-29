import { promoServices } from '../../utils/constants/promoServices'
import styles from './showcase.module.scss' // Import the SCSS module

const ShowcaseList = () => {
	return (
		<div className={styles.featureContainer}>
			{promoServices.map(({ icon, text }, index) => (
				<div key={index} className={styles.featureItem}>
					<img className={styles.icon} src={icon} alt='icon' height={50} width={50} />
					<div className={styles.text}>{text}</div>
				</div>
			))}
		</div>
	)
}

export default ShowcaseList
