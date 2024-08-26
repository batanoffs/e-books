import styles from './categories.module.scss' // Import the SCSS module
import { useNavigate } from 'react-router-dom'

interface CategoryItemProps {
	item: string
}

const CategoryItem = ({ item }: CategoryItemProps) => {
	const navigate = useNavigate()
	return (
		<div className={styles.categoryItemsWrapper}>
			<div
				className={styles.categoryItem}
				onClick={() => navigate(`/catalog/books/${item.toLowerCase()}`)}
			>
				<span className={styles.categoryText}>{item}</span>
			</div>
		</div>
	)
}

export default CategoryItem
