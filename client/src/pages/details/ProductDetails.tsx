import { useState } from 'react'
import ItemDetailsDropdownMenus from './ItemDetailsDropdownMenus'
import ItemDetailsTitle from './ItemDetailsTitle'
import { Product } from '../../interfaces/product.interface'

import styles from './details.module.scss'

const ProductDetails = ({ product }: { product: Product }) => {
	const [isDescriptionOpen, setIsDescriptionOpen] = useState<boolean>(true)
	const [isDeliveryInfoOpen, setIsDeliveryInfoOpen] = useState<boolean>(false)
	const [isReturnsOpen, setIsReturnsOpen] = useState<boolean>(false)
	const [isCommentsOpen, setIsCommentsOpen] = useState<boolean>(false)
	const [quantity, setQuantity] = useState<number>(1)

	return (
		<>
			<ItemDetailsTitle
				styles={styles}
				quantity={quantity}
				setQuantity={setQuantity}
				product={product}
			/>

			<ItemDetailsDropdownMenus
				product={product}
				isDescriptionOpen={isDescriptionOpen}
				setIsDescriptionOpen={setIsDescriptionOpen}
				isDeliveryInfoOpen={isDeliveryInfoOpen}
				setIsDeliveryInfoOpen={setIsDeliveryInfoOpen}
				isReturnsOpen={isReturnsOpen}
				setIsReturnsOpen={setIsReturnsOpen}
				isCommentsOpen={isCommentsOpen}
				setIsCommentsOpen={setIsCommentsOpen}
				styles={styles}
			/>
		</>
	)
}

export default ProductDetails
