import { Category } from '../../interfaces/categories.interface'
import { useNavigate } from 'react-router-dom'

import styles from './categories.module.scss'

const CategoryItem = ({ category }: Category) => {
	const navigate = useNavigate()

	return (
		<div className={styles.categoryItemsWrapper}>
			<div className={styles.categoryItem}>
				<span
					className={styles.categoryText}
					onClick={() =>
						navigate(`/catalog/${category.categoryType}/${category.name.toLowerCase()}`)
					}
				>
					{category.name}
				</span>
			</div>
		</div>
	)
}

export default CategoryItem
