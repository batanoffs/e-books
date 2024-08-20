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

const HomePage = () => {
	const [books, setBooks] = useState<Book[]>([])
	const [bookCategories, setBookCategories] = useState<string[]>([])
	const toggleLoading = useSpinner((state) => state.toggleLoading)

	const fetchBookCategoriesCallback = useCallback(async () => {
		try {
			const response = await axios.get(API.CATEGORIES, { params: { type: 'books' } })

			setBookCategories([...new Set(response.data)])
		} catch (error) {
			console.error(error)
		} finally {
			toggleLoading() // Stop loading
		}
	}, [])

	useEffect(() => {
		fetchBookCategoriesCallback()
	}, [fetchBookCategoriesCallback])

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
			element: <MultiCarousel books={books} />,
		},
		{
			id: 'categories',
			element: <CategoryList bookCategories={bookCategories} />,
		},
	]

	return <MainLayout children={content} />
}

export default HomePage
