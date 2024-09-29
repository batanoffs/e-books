import { useCallback, useEffect } from 'react'
import Typography from '@mui/material/Typography'
import axios from 'axios'

import CategoriesCarousel from '../Carousels/CategoriesCarousel'
import useSpinner from '../../store/spinner'
import useCategoryStore from '../../store/categories'
import CategoryItem from './categoryItem'
import API from '../../utils/constants/api'

import styles from './categories.module.scss'

const CategoryList = () => {
	const setCategories = useCategoryStore((state) => state.setCategories)
	const categoriesMap = useCategoryStore((state) => state.categoriesMap)
	const { hideSpinner, showSpinner } = useSpinner()

	const fetchBookCategoriesCallback = useCallback(async () => {
		try {
			showSpinner() // Start loading
			const response = await axios.get(API.CATEGORIES)
			setCategories(response.data)
		} catch (error) {
			console.error(error)
		} finally {
			hideSpinner() // Stop loading
		}
	}, [])

	useEffect(() => {
		fetchBookCategoriesCallback()
	}, [fetchBookCategoriesCallback])

	return (
		<div className={styles.wrapper}>
			<div className={styles.categoryContainer}>
				<Typography variant='h5' className={styles.mainTitle}>
					Книги
				</Typography>
				<CategoriesCarousel categories={categoriesMap.books} Component={CategoryItem} />
			</div>
			<div className={styles.categoryContainer}>
				<Typography variant='h5' className={styles.mainTitle}>
					Учебници
				</Typography>
				<CategoriesCarousel categories={categoriesMap.textbooks} Component={CategoryItem} />
			</div>

			<div className={styles.categoryContainer}>
				<Typography variant='h5' className={styles.mainTitle}>
					Канцелария
				</Typography>
				<CategoriesCarousel
					categories={categoriesMap.stationeries}
					Component={CategoryItem}
				/>
			</div>
		</div>
	)
}

export default CategoryList
