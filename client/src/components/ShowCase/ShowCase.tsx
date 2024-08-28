import styles from './showcase.module.scss' // Import the SCSS module

interface Icon {
	icon: string
	text: string
}

const features: Icon[] = [
	{
		icon: '/delivery.png',
		text: 'Бърза доставка',
	},
	{
		icon: '/gift.png',
		text: 'Безплатна доставка над 49,80 лв.',
	},
	{
		icon: '/book.png',
		text: 'Над 500 световни бранда',
	},
	{
		icon: '/shop.png',
		text: 'Купи онлайн, вземи от магазин',
	},
]

const ShowcaseList = () => {
	return (
		<div className={styles.featureContainer}>
			{features.map(({ icon, text }, index) => (
				<div key={index} className={styles.featureItem}>
					<img className={styles.icon} src={icon} alt='icon' height={50} width={50} />
					<div className={styles.text}>{text}</div>
				</div>
			))}
		</div>
	)
}

export default ShowcaseList
