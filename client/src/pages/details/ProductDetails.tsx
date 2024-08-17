import { useState } from 'react'
import axios from 'axios'

import { ProductDetailsProps } from '../../interfaces/ProductDetailsProps.interface'
import { ItemDetailsDropdownMenus } from './ItemDetailsDropdownMenus'
import { ItemDetailsTitle } from './ItemDetailsTitle'
import { cartService } from '../../services/cartService'

import styles from './details.module.scss'
import useCartStore from '../../store/cart'
import { API } from '../../utils/constants/api'
import { useAlertStore } from '../../store/alert'

export const ProductDetails = ({ item }: { props: ProductDetailsProps }) => {
	const [isDescriptionOpen, setIsDescriptionOpen] = useState<boolean>(true)
	const [isDeliveryInfoOpen, setIsDeliveryInfoOpen] = useState<boolean>(false)
	const [isReturnsOpen, setIsReturnsOpen] = useState<boolean>(false)
	const [isCommentsOpen, setIsCommentsOpen] = useState<boolean>(false)
	const [quantity, setQuantity] = useState<number>(1)

	const showAlert = useAlertStore((state) => state.showAlert)
	const addToCart = useCartStore((state) => state.addToCart)

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
		showAlert('Успешно добавен продукт', 'success')
	}

	const handleAddToWishlist = async () => {
		const productId = item._id
		if (!productId) return console.log('productId not found')

		const response = await axios.post(
			API.WISHLIST,
			{ productId },
			{
				withCredentials: true,
			}
		)

		if (response.status === 200) {
			showAlert('Успешно добавен продукт', 'success')
		}
	}

	return (
		<>
			<ItemDetailsTitle
				{...{
					handleAddToCart,
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
