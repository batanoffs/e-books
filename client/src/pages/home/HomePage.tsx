import { useEffect, useState, useCallback } from 'react'
import axios from 'axios'

import {
	MainLayout,
	MultiCarousel,
	SingleCarousel,
	CategoryList,
	ShowcaseList,
	ItemCard,
} from '../../components/index'

import API from '../../utils/constants/api'
import useSpinner from '../../store/spinner'

export const HomePage = () => {
	const [products, setProducts] = useState([])
	const { hideSpinner, showSpinner } = useSpinner()

	const fetchBooksCallback = useCallback(async () => {
		try {
			showSpinner()
			const response = await axios.get(API.BOOKS)
			setProducts(response.data)
		} catch (error) {
			console.error(error)
		} finally {
			hideSpinner()
		}
	}, [])

	useEffect(() => {
		fetchBooksCallback()
	}, [fetchBooksCallback])

	const content = [
		{
			id: 'featured',
			element: <SingleCarousel products={products} />,
		},
		{
			id: 'showcase',
			element: <ShowcaseList />,
		},
		{
			id: 'popular',
			element: <MultiCarousel products={products} Component={ItemCard} />,
		},
		{
			id: 'categories',
			element: <CategoryList />,
		},
	]

	return <MainLayout children={content} />
}
