import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import LayoutHeader from '../../components/Layout/catalog/LayoutHeader'
import DetailsLayout from '../../components/Layout/detail/DetailsLayout'
import Spinner from '../../components/utils/Spinner'
import ImageViewer from './ImageViewer'
import ProductDetails from './ProductDetails'
import API from '../../utils/constants/api'
import { Product } from '../../interfaces/product.interface'
import useSpinner from '../../store/spinner'

const DetailsPage = ({ type, path }: { type: string | undefined; path: string }) => {
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

	if (!product) return <Spinner />

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

export default DetailsPage
