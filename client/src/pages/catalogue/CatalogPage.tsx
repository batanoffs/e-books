import { useCallback, useEffect, useState } from 'react'
import { Route, Routes, useParams } from 'react-router-dom'
import axios from 'axios'

import CatalogLayout from '../../components/Layout/catalog/CatalogLayout'
import LayoutHeader from '../../components/Layout/catalog/LayoutHeader'
import LayoutAside from '../../components/Layout/catalog/LayoutAside'
import CatalogItems from '../../components/Layout/catalog/CatalogItems'
import ItemCard from '../../components/Cards/ItemCard'
import DetailsPage from '../details/DetailsPage'
import useCategoryStore from '../../store/categories'
import useSpinner from '../../store/spinner'
import API from '../../utils/constants/api'
import { getNavigationParams } from '../../utils/helpers/getNavigationParams'

export const CatalogPage = () => {
	const [products, setProducts] = useState([])
	const { hideSpinner, showSpinner } = useSpinner()
	const categoriesMap = useCategoryStore((state) => state.categoriesMap)
	const params = useParams()
	const navParams = getNavigationParams(params)

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

	const Layout = (
		<CatalogLayout
			header={
				<LayoutHeader
					navCategory={navParams.navCategory}
					path={navParams.navString}
					hasSorting={true}
					resultCount={products.length}
					title=''
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
			<Route path={`/${navParams.type}/${navParams.navCategory}`} element={Layout} />
			<Route
				path={`/${navParams.type}/${navParams.navCategory}/:id`}
				element={<DetailsPage path={navParams.navString} type={navParams.type} />}
			/>
		</Routes>
	)
}
