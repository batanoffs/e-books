import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

import { ProductDetailsProps } from '../../interfaces/ProductDetailsProps.interface'
import { ItemDetailsDropdownMenus } from './ItemDetailsDropdownMenus'
import { ItemDetailsTitle } from './ItemDetailsTitle'
import { getUserId } from '../../utils/helpers/auth'
import { API } from '../../utils/constants/api'

import styles from './details.module.scss'

export const ProductDetails = ({ ...props }: { props: ProductDetailsProps }) => {
	const [isDescriptionOpen, setIsDescriptionOpen] = useState<boolean>(true)
	const [isDeliveryInfoOpen, setIsDeliveryInfoOpen] = useState<boolean>(false)
	const [isReturnsOpen, setIsReturnsOpen] = useState<boolean>(false)
	const [isCommentsOpen, setIsCommentsOpen] = useState<boolean>(false)
	const [quantity, setQuantity] = useState<number>(1)
	const navigate = useNavigate()

	const handleAddToCart = async () => {
		const { _id, price, title } = props

		if (!_id || !price || !title) return new Error('Missing product data')

		try {
			const userId = await getUserId()
			const data = {
				userId,
				productId: _id,
				quantity,
				name: title,
				price,
				productType: 'book',
			}

			await axios.post(API.CART, data)
		} catch (error) {
			console.error('Error getting user ID or adding to cart:', error)
		}
	}

	const handleBuyNow = async () => {
		//TODO buy now
		console.log('Buy now')
		// navigate('/checkout')
	}

	const handleAddToWishlist = async () => {
		//TODO buy now
		console.log('Added to wishlist')
	}

	return (
		<div className={styles.detailsWrapper}>
			<ItemDetailsTitle
				{...{
					handleAddToCart,
					handleBuyNow,
					handleAddToWishlist,
					styles,
					quantity,
					setQuantity,
					...props,
				}}
			/>
			<ItemDetailsDropdownMenus
				{...{
					styles,
					isDescriptionOpen,
					setIsDescriptionOpen,
					isDeliveryInfoOpen,
					setIsDeliveryInfoOpen,
					isReturnsOpen,
					setIsReturnsOpen,
					isCommentsOpen,
					setIsCommentsOpen,
					...props,
				}}
			/>
		</div>
	)
}
