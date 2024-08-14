import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

import { ProductDetailsProps } from '../../interfaces/ProductDetailsProps.interface'
import { ItemDetailsDropdownMenus } from './ItemDetailsDropdownMenus'
import { ItemDetailsTitle } from './ItemDetailsTitle'
import { cartService } from '../../services/cartService'

import styles from './details.module.scss'

export const ProductDetails = ({ ...props }: { props: ProductDetailsProps }) => {
	const [isDescriptionOpen, setIsDescriptionOpen] = useState<boolean>(true)
	const [isDeliveryInfoOpen, setIsDeliveryInfoOpen] = useState<boolean>(false)
	const [isReturnsOpen, setIsReturnsOpen] = useState<boolean>(false)
	const [isCommentsOpen, setIsCommentsOpen] = useState<boolean>(false)
	const [quantity, setQuantity] = useState<number>(1)
	const navigate = useNavigate()

	const handleAddToCart = async () => {
		await cartService.addToCart(props, quantity, 'book')
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
		<>
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
		</>
	)
}
