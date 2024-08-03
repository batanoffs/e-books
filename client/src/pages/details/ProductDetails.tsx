import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import { ProductDetailsProps } from '../../interfaces/ProductDetailsProps.interface'
import { ItemDetailsDropdownMenus } from './ItemDetailsDropdownMenus'
import { ItemDetailsTitle } from './ItemDetailsTitle'
import { API } from '../../utils/constants/api'

import styles from './details.module.scss'
import { getUserId } from '../../utils/helpers/auth'

export const ProductDetails = ({ ...props }: { props: ProductDetailsProps }) => {
	const [isDescriptionOpen, setIsDescriptionOpen] = useState<boolean>(true)
	const [isDeliveryInfoOpen, setIsDeliveryInfoOpen] = useState<boolean>(false)
	const [isReturnsOpen, setIsReturnsOpen] = useState<boolean>(false)
	const [isCommentsOpen, setIsCommentsOpen] = useState<boolean>(false)
	const [quantity, setQuantity] = useState<number>(1)
	const navigate = useNavigate()

	const handleAddToCart = async () => {
		const { _id, price, title } = props
		if (!_id) return
		if (!price) return
		if (!title) return

		try {
			const userId = await getUserId()

			if (!userId) return new Error('Error getting user ID')

			const data = {
				userId,
				productId: _id,
				quantity,
				name: title,
				price,
				productType: 'book',
			}

			console.log('cart data:', data)

			const response = await axios.post(API.CART, data)
			console.log(response)
		} catch (error) {
			console.error('Error getting user ID or adding to cart:', error)
		}
	}

	const handleBuyNow = async () => {
		//TODO buy now
		console.log('Buy now')
		// navigate('/checkout')
		// await axios.put(`/cart/${_id}`, { quantity: 1 });
	}

	const handleAddToWishlist = async () => {
		//TODO buy now
		console.log('Added to wishlist')

		// await axios.put(`/cart/${_id}`, { quantity: 1 });
	}

	return (
		<div className={styles.detailsWrapper}>
			<div className={styles.dropdownSection}>
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
		</div>
	)
}
