import { useCallback, useEffect } from 'react'
import axios from 'axios'

import Typography from '@mui/material/Typography'
import useSpinner from '../../store/spinner'
import useCategoryStore from '../../store/categories'
import MultiCarousel from '../Carousels/MultiCarousel'
import CategoryItem from './categoryItem'
import API from '../../utils/constants/api'

import styles from './categories.module.scss' // Import the SCSS module

const CategoryList = () => {
	const setCategories = useCategoryStore((state) => state.setCategories)
	const categoriesMap = useCategoryStore((state) => state.categoriesMap)
	const toggleLoading = useSpinner((state) => state.toggleLoading)

	const fetchBookCategoriesCallback = useCallback(async () => {
		try {
			const response = await axios.get(API.CATEGORIES)
			console.log(response.data)

			setCategories(response.data)
		} catch (error) {
			console.error(error)
		} finally {
			toggleLoading() // Stop loading
		}
	}, [])

	useEffect(() => {
		fetchBookCategoriesCallback()
	}, [fetchBookCategoriesCallback])
	console.log('categoriesMap', categoriesMap)

	const bookCategories = categoriesMap.get('book')
	const textbooksCategories = categoriesMap.get('textbook')
	const stationeryCategories = categoriesMap.get('stationery')

	console.log('bookCategories', bookCategories);
	

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
