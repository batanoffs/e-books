import { Category } from '../../interfaces/categories.interface'
import { useNavigate } from 'react-router-dom'

import styles from './categories.module.scss'

export const CategoryItem = ({ category }: Category) => {
	const navigate = useNavigate()

	const handleCategoryClick = () => {
		navigate(`/catalog/${category.categoryType}/${category.name}`)
	}

	return (
		<div className={styles.categoryItemsWrapper}>
			<div className={styles.categoryItem}>
				<span className={styles.categoryText} onClick={handleCategoryClick}>
					{category.name}
				</span>
			</div>
		</div>
	)
}
