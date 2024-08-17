import { useEffect, useState, useCallback } from 'react'
import axios from 'axios'

import { MainLayout } from '../../components/Layout/main/MainLayout'
import { MultiCarousel } from '../../components/Carousels/MultiCarousel'
import { SingleCarousel } from '../../components/Carousels/SingleCarousel'
import { API } from '../../utils/constants/api'
import { useSpinner } from '../../store/spinner'
import CategoryList from '../../components/Categories/Categories'
import ShowcaseList from '../../components/ShowCase/ShowCase'

interface Book {
	id: string
	title: string
	author: string
	price: number
	description: string
	stock: number
	imageUrl: string
	category: string
}

const HomePage = () => {
	const [books, setBooks] = useState<Book[]>([])
	const [bookCategories, setBookCategories] = useState<string[]>([])
	const toggleLoading = useSpinner((state) => state.toggleLoading)

	const fetchBooksCallback = useCallback(async () => {
		try {
			const response = await axios.get(API.BOOKS)
			const fetchedBooks = response.data

			setBooks(fetchedBooks)
			setBookCategories([...new Set(fetchedBooks.map((book: Book) => book.category))])
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
