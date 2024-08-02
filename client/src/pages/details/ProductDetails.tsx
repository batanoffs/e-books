import { useState } from 'react'
import axios from 'axios'

import styles from './details.module.scss'
import { ProductDetailsProps } from '../../interfaces/ProductDetailsProps.interface'
import { ItemDetailsTitle } from './ItemDetailsTitle'
import { ItemDetailsDropdownMenus } from './ItemDetailsDropdownMenus'

export const ProductDetails = ({ ...props }: { props: ProductDetailsProps }) => {
	const [isDescriptionOpen, setIsDescriptionOpen] = useState<boolean>(true)
	const [isDeliveryInfoOpen, setIsDeliveryInfoOpen] = useState<boolean>(false)
	const [isReturnsOpen, setIsReturnsOpen] = useState<boolean>(false)
	const [isCommentsOpen, setIsCommentsOpen] = useState<boolean>(false)

	const handleAddToCart = async (id, quantity) => {
		//TODO add to cart
		console.log('Added to cart')

		// await axios.post(`/cart/${_id}`);
	}

	const handleBuyNow = async () => {
		//TODO buy now
		console.log('Buy now')

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
