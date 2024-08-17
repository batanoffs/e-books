import styles from './showcase.module.scss' // Import the SCSS module

const features = [
	{
		icon: '🚚', // Placeholder for actual icon (use an image or SVG in real application)
		text: 'Бърза доставка',
	},
	{
		icon: '🎁', // Placeholder for actual icon
		text: 'Безплатна доставка над 49,80 лв.',
	},
	{
		icon: '📚', // Placeholder for actual icon
		text: 'Над 500 световни бранда',
	},
	{
		icon: '🏪', // Placeholder for actual icon
		text: 'Купи онлайн, вземи от магазин.',
	},
]

const ShowcaseList = () => {
	return (
		<div className={styles.featureContainer}>
			{features.map((feature, index) => (
				<div key={index} className={styles.featureItem}>
					<div className={styles.icon}>{feature.icon}</div>
					<div className={styles.text}>{feature.text}</div>
				</div>
			))}
		</div>
	)
}

export default ShowcaseList
