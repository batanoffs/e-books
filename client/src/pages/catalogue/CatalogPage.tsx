import { useCallback, useEffect, useState } from 'react'
import { Route, Routes, useParams } from 'react-router-dom'
import axios from 'axios'

import {
	CatalogLayout,
	LayoutHeader,
	LayoutAside,
	CatalogItems,
	ItemCard,
} from '../../components/index'
import { DetailsPage } from '../index'
import useCategoryStore from '../../store/categories'
import useSpinner from '../../store/spinner'
import API from '../../utils/constants/api'
import { getNavigationParams } from '../../utils/helpers/getNavigationParams'

export const CatalogPage = () => {
	const [books, setBooks] = useState([])
	const [textbooks, setTextBooks] = useState([])
	const [stationery, setStationery] = useState([])
	const { hideSpinner, showSpinner } = useSpinner()
	const categoriesMap = useCategoryStore((state) => state.categoriesMap)
	const params = useParams()
	const navParams = getNavigationParams(params)

	//TODO create single request in the backend for all products
	const fetchBooksCallback = useCallback(async () => {
		try {
			showSpinner()
			const responseBooks = await axios.get(API.BOOKS)
			const responseTextBooks = await axios.get(API.TEXTBOOKS)
			const responseStationery = await axios.get(API.STATIONERY)
			setBooks(responseBooks.data)
			setTextBooks(responseTextBooks.data)
			setStationery(responseStationery.data)
		} catch (error) {
			console.error(error)
		} finally {
			hideSpinner()
		}
	}, [])

	useEffect(() => {
		fetchBooksCallback()
	}, [fetchBooksCallback])

	const products =
		navParams.productType === 'books'
			? books
			: navParams.productType === 'textbooks'
			? textbooks
			: stationery

	const Layout = (
		<CatalogLayout
			header={
				<LayoutHeader
					productCategory={navParams.productCategory}
					path={navParams.navString}
					hasSorting={true}
					resultCount={books.length}
					title=''
				/>
			}
			//todo fix categories={categoriesMap.books}
			aside={<LayoutAside categories={categoriesMap.books} />}
		>
			<CatalogItems
				products={products}
				Component={ItemCard}
				sx={{
					display: 'flex',
					flexWrap: 'wrap',
					justifyContent: 'flex-start',
					gap: '1.5em',
				}}
			/>
			{/* TODO add children for maybe promotions discounts etc*/}
		</CatalogLayout>
	)
	//todo add ${navParams.navCategory} in urls when implemented
	return (
		<Routes>
			<Route path={`/${navParams.productType}/`} element={Layout} />
			<Route
				path={`/${navParams.productType}/:id`}
				element={
					<DetailsPage path={navParams.navString} productType={navParams.productType} />
				}
			/>
		</Routes>
	)
}
