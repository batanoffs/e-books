import { useNavigate } from 'react-router-dom'
import useCategoryStore from '../../store/categories'
import Typography from '@mui/material/Typography'

import styles from './categories.module.scss' // Import the SCSS module
import CategoryItem from './categoryItem'
import MultiCarousel from '../Carousels/MultiCarousel'

const CategoryList = () => {
	const categoriesMap = useCategoryStore((state) => state.categoriesMap)
	const navigate = useNavigate()

	const bookCategories = categoriesMap.get('books')
	const textbooksCategories = categoriesMap.get('textbooks')
	const stationeryCategories = categoriesMap.get('stationery')

	return (
		<div className={styles.wrapper}>
			<Typography variant='h5' className={styles.mainTitle}>
				Пазарувай по категории
			</Typography>
			<div className={styles.categoryContainer}>
				<Typography variant='h5' className={styles.categoryTitle}>
					Категории "Книги"
				</Typography>
				<MultiCarousel items={bookCategories} CardComponent={CategoryItem} />
			</div>
			<div className={styles.categoryContainer}>
				<Typography variant='h5' className={styles.categoryTitle}>
					Категории "Учебници"
				</Typography>
				<MultiCarousel items={textbooksCategories} CardComponent={CategoryItem} />
			</div>

			<div className={styles.categoryContainer}>
				<Typography variant='h5' className={styles.categoryTitle}>
					Категории "Канцелария"
				</Typography>
				<MultiCarousel items={stationeryCategories} CardComponent={CategoryItem} />
			</div>
		</div>
	)
}

export default CategoryList
