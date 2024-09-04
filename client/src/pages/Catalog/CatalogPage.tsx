import { useCallback, useEffect, useState } from 'react'
import { Route, Routes, useParams } from 'react-router-dom'
import axios from 'axios'

import CatalogLayout from '../../components/Layout/catalog/CatalogLayout'
import LayoutHeader from '../../components/Layout/catalog/LayoutHeader'
import LayoutAside from '../../components/Layout/catalog/LayoutAside'
import CatalogItems from '../../components/Layout/catalog/CatalogItems'
import ItemCard from '../../components/Cards/ItemCard'
import DetailsPage from '../Details/DetailsPage'
import useCategoryStore from '../../store/categories'
import useSpinner from '../../store/spinner'
import API from '../../utils/constants/api'

const CatalogPage = () => {
	const [products, setProducts] = useState([])
	const toggleLoading = useSpinner((state) => state.toggleLoading)
	const categoriesMap = useCategoryStore((state) => state.categoriesMap)
	const params = useParams()
	const type = Object.values(params)[0]?.split('/')[0]
	const navCategory = Object.values(params)[0]?.split('/')[1]

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

	const headerText = {
		books: 'книги',
		textbooks: 'учебници',
		stationery: 'канцелария',
	}[type]

	const Layout = (
		<CatalogLayout
			header={
				<LayoutHeader
					navCategory={navCategory}
					path={`книжарница / ${headerText} / ${navCategory}`}
					hasSorting={true}
					resultCount={products.length}
					title
				/>
			}
			aside={<LayoutAside categories={categoriesMap.books} />}
		>
			<CatalogItems
				products={products}
				Component={ItemCard}
				sx={{
					display: 'flex',
					flexWrap: 'wrap',
					justifyContent: 'flex-start',
					gap: '0.5em',
				}}
			/>
			{/* TODO add children for maybe promotions discounts etc*/}
		</CatalogLayout>
	)

	return (
		<Routes>
			<Route path={`/${type}/${navCategory}`} element={Layout} />
			<Route
				path={`/${type}/${navCategory}/:id`}
				element={
					<DetailsPage path={`книжарница / ${headerText} / ${navCategory}`} type={type} />
				}
			/>
		</Routes>
	)
}

export default CatalogPage
