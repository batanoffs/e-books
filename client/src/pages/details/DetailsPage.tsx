import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import ProductDetails from './ProductDetails'
import API from '../../utils/constants/api'
import { Product } from '../../interfaces/product.interface'
import useSpinner from '../../store/spinner'
import { LayoutHeader, DetailsLayout, GlobalSpinner, ImageViewer } from '../../components/index'

export const DetailsPage = ({ type, path }: { type: string | undefined; path: string }) => {
	const [product, setProduct] = useState<Product | null>(null)
	const { hideSpinner, showSpinner } = useSpinner()
	const productID = useParams().id

	const detailsApi =
		type === 'books' ? API.BOOKS : type === 'textbooks' ? API.TEXTBOOKS : API.STATIONERY

	const fetchProductCallback = useCallback(async () => {
		try {
			showSpinner()
			const response = await axios.get(`${detailsApi}/${productID}`)
			setProduct(response.data)
		} catch (error) {
			console.error(error)
		} finally {
			hideSpinner()
		}
	}, [productID])

	useEffect(() => {
		fetchProductCallback()
	}, [fetchProductCallback])

	if (!product) return <GlobalSpinner />

	return (
		<DetailsLayout
			header={
				<LayoutHeader
					path={path}
					title={product.title}
					navCategory
					resultCount
					hasSorting={false}
				/>
			}
			aside={<ImageViewer imageUrl={product.picture} />}
		>
			<ProductDetails product={product} />
		</DetailsLayout>
	)
}
