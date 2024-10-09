import { Category } from '../../interfaces/categories.interface'
import { useNavigate } from 'react-router-dom'
import styles from './categories.module.scss'
import useFiltersStore from '../../store/filters'

export const CategoryItem = ({ category }: Category) => {
	const navigate = useNavigate()
	const setProductCategory = useFiltersStore((state) => state.setProductCategory)
	const handleCategoryClick = () => {
		setProductCategory(category.name)
		navigate(`/catalog/${category.categoryType}/`)
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
