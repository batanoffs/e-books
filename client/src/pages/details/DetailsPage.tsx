import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import { API } from '../../utils/constants/api'
import { LayoutHeader } from '../../components/Layout/catalog/LayoutHeader'
import { DetailsLayout } from '../../components/Layout/detail/DetailsLayout'
import { ImageViewer } from './ImageViewer'

import { ProductDetails } from './ProductDetails'
import Spinner from '../../components/utils/Spinner'

interface Item {
	_id: string
	title: string
	author: string
	price: number
	description: string
	stock: number
	coverImagePath: string
}

export const DetailsPage = ({ type, path }: { type: string | undefined; path: string }) => {
	const productID = useParams().id
	const [book, setBook] = useState<Item | null>(null)

	const detailsApi =
		type === 'books' ? API.BOOKS : type === 'textbooks' ? API.TEXTBOOKS : API.STATIONERY

	useEffect(() => {
		const fetchBook = async () => {
			const response = await axios.get(`${detailsApi}/${productID}`)
			setBook(response.data)
		}
		fetchBook()
	}, [productID])

	if (!book) return <Spinner />

	return (
		<DetailsLayout
			header={
				<LayoutHeader
					path={path}
					title={book.title}
					navCategory
					resultCount
					hasSorting={false}
				/>
			}
			aside={<ImageViewer imageUrl={book.coverImagePath} />}
		>
			<ProductDetails {...book} />
		</DetailsLayout>
	)
}
