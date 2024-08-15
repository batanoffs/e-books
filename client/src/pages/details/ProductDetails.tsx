import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

import { ProductDetailsProps } from '../../interfaces/ProductDetailsProps.interface'
import { ItemDetailsDropdownMenus } from './ItemDetailsDropdownMenus'
import { ItemDetailsTitle } from './ItemDetailsTitle'
import { cartService } from '../../services/cartService'

import styles from './details.module.scss'
import useCartStore from '../../store/cart'

export const ProductDetails = ({ item }: { props: ProductDetailsProps }) => {
	const [isDescriptionOpen, setIsDescriptionOpen] = useState<boolean>(true)
	const [isDeliveryInfoOpen, setIsDeliveryInfoOpen] = useState<boolean>(false)
	const [isReturnsOpen, setIsReturnsOpen] = useState<boolean>(false)
	const [isCommentsOpen, setIsCommentsOpen] = useState<boolean>(false)
	const [quantity, setQuantity] = useState<number>(1)
	const addToCart = useCartStore((state) => state.addToCart)
	const navigate = useNavigate()

	const handleAddToCart = async (e) => {
		const target = e.target
		const currentItem = {
			product: {
				id: item._id,
				coverImagePath: item.coverImagePath,
				title: item.title,
				price: item.price,
			},
			quantity: quantity,
		}
		const quantityInputElement = target.parentElement.querySelector('input')
		const quantityValue = Number(quantityInputElement.value)
		addToCart(currentItem)
		await cartService.addToCart(item, quantityValue, 'book')
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
					...item,
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
					...item,
				}}
			/>
		</>
	)
}
