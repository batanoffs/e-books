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
import { getProductCategoryBG } from '../../utils/helpers/getNavigationParams'
import { Helmet } from 'react-helmet-async'

export const CatalogPage = () => {
	const [products, setProducts] = useState([])
	const { categoriesMap } = useCategoryStore()
	const { hideSpinner, showSpinner } = useSpinner()
	const params = useParams()
	const { productTypeBG, productType } = getProductCategoryBG(params)

	const fetchBooksCallback = useCallback(async () => {
		try {
			const detailsApi =
				productType === 'books'
					? API.BOOKS
					: productType === 'textbooks'
					? API.TEXTBOOKS
					: API.STATIONERY
			showSpinner()
			const response = await axios.get(detailsApi)
			setProducts(response.data)
		} catch (error) {
			console.error(error)
		} finally {
			hideSpinner()
		}
	}, [productType])

	useEffect(() => {
		fetchBooksCallback()
	}, [fetchBooksCallback])

	const categories = categoriesMap[productType as keyof typeof categoriesMap] ?? []

	const Layout = () => {
		return (
			<CatalogLayout
				header={
					<LayoutHeader
						productType={productType}
						productTypeBG={productTypeBG}
						hasSorting={true}
						resultCount={products.length}
						title=''
					/>
				}
				aside={<LayoutAside categories={categories} />}
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
			</CatalogLayout>
		)
	}

	return (
		<>
			<Helmet>
				<title>Каталог</title>
				<meta
					name='description'
					content='Пазарувай от нашия каталог най-новите книги, учебници и канцеларски материали.'
				/>
				<link rel='canonical' href='/catalog/' />
			</Helmet>
			<Routes>
				<Route
					path={`/${productType.toLowerCase()}/:id`}
					element={
						<DetailsPage productTypeBG={productTypeBG} productType={productType} />
					}
				/>
				<Route path={`/${productType.toLowerCase()}`} element={<Layout />} />
			</Routes>
		</>
	)
}
