import styles from './categories.module.scss' // Import the SCSS module
import { useNavigate } from 'react-router-dom'

const CategoryList = ({ bookCategories }) => {
	const navigate = useNavigate()
	const categories = bookCategories
		? bookCategories.map((category) => ({
				name: category,
				url: `/catalog/books/${category.toLowerCase()}`,
		  }))
		: []

	return (
		<div className={styles.categoryContainer}>
			{categories.map((category, index) => (
				<div
					key={index}
					className={styles.categoryItem}
					onClick={() => navigate(category.url)}
				>
					<span className={styles.categoryText}>{category.name}</span>
				</div>
			))}
		</div>
	)
}

export default CategoryList
