import { useState } from 'react'

import wishlistService from '../../services/wishlistService'
import cartService from '../../services/cartService'
import useCartStore from '../../store/cart'
import useAlertStore from '../../store/alert'
import { useLoginModal } from '../../store/helperModal'
import authGuards from '../../middlewares/guards'
import ProductDetailsProps from '../../interfaces/ProductDetailsProps.interface'
import ItemDetailsDropdownMenus from './ItemDetailsDropdownMenus'
import ItemDetailsTitle from './ItemDetailsTitle'

import styles from './details.module.scss'

const ProductDetails = ({ item }: { props: ProductDetailsProps }) => {
	const [isDescriptionOpen, setIsDescriptionOpen] = useState<boolean>(true)
	const [isDeliveryInfoOpen, setIsDeliveryInfoOpen] = useState<boolean>(false)
	const [isReturnsOpen, setIsReturnsOpen] = useState<boolean>(false)
	const [isCommentsOpen, setIsCommentsOpen] = useState<boolean>(false)
	const [quantity, setQuantity] = useState<number>(1)

	const toggleOpen = useLoginModal((state) => state.toggleOpen)
	const showAlert = useAlertStore((state) => state.showAlert)
	const addToCart = useCartStore((state) => state.addToCart)

	const handleAddToCart = async (e) => {
		const isUserAuthenticated = authGuards.isAuth()
		if (!isUserAuthenticated) {
			toggleOpen()
			return showAlert('Моля, влезте в акаунта си, за да продължите', 'info')
		}
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
		await cartService.addMany(item, quantityValue)
		showAlert('Успешно добавен продукт', 'success')
	}

	const handleAddToWishlist = async () => {
		const productId = item._id

		const response = await wishlistService.add(productId)

		console.log(response)

		// if (response.status === 200) {
		// 	showAlert('Успешно добавен продукт', 'success')
		// }
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

export default ProductDetails