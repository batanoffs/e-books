import { useEffect, useState, useCallback } from 'react'
import axios from 'axios'

import MainLayout from '../../components/Layout/main/MainLayout'
import MultiCarousel from '../../components/Carousels/MultiCarousel'
import SingleCarousel from '../../components/Carousels/SingleCarousel'
import API from '../../utils/constants/api'
import useSpinner from '../../store/spinner'
import CategoryList from '../../components/Categories/Categories'
import ShowcaseList from '../../components/ShowCase/ShowCase'
import { Book } from '../../interfaces/book.interface'
import ItemCard from '../../components/Cards/ItemCard'

const HomePage = () => {
	const [books, setBooks] = useState<Book[]>([])
	const toggleLoading = useSpinner((state) => state.toggleLoading)

	const fetchBooksCallback = useCallback(async () => {
		try {
			const response = await axios.get(API.BOOKS)
			setBooks(response.data)
		} catch (error) {
			console.error(error)
		} finally {
			toggleLoading() // Stop loading
		}
	}, [])

	useEffect(() => {
		fetchBooksCallback()
	}, [fetchBooksCallback])

	const content = [
		{
			id: 'featured',
			element: <SingleCarousel books={books} />,
		},
		{
			id: 'showcase',
			element: <ShowcaseList />,
		},
		{
			id: 'popular',
			element: <MultiCarousel items={books} CardComponent={ItemCard} />,
		},
		{
			id: 'categories',
			element: <CategoryList />,
		},
	]

	return <MainLayout children={content} />
}

export default HomePage
