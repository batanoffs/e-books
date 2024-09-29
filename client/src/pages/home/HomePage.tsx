import { useEffect, useState, useCallback } from 'react'
import axios from 'axios'

import MainLayout from '../../components/Layout/main/MainLayout'
import MultiCarousel from '../../components/Carousels/MultiCarousel'
import SingleCarousel from '../../components/Carousels/SingleCarousel'
import CategoryList from '../../components/Categories/Categories'
import ShowcaseList from '../../components/ShowCase/ShowCase'
import ItemCard from '../../components/Cards/ItemCard'
import API from '../../utils/constants/api'
import useSpinner from '../../store/spinner'

export const HomePage = () => {
	const [products, setProducts] = useState([])
	const toggleLoading = useSpinner((state) => state.toggleLoading)

	const fetchBooksCallback = useCallback(async () => {
		try {
			const response = await axios.get(API.BOOKS)
			setProducts(response.data)
		} catch (error) {
			console.error(error)
		} finally {
			toggleLoading()
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
