import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

import { isAuth } from '../../middlewares/guards'
import { ProductDetailsProps } from '../../interfaces/ProductDetailsProps.interface'
import QuantityInput from '../../components/QuantityInput/QuantityInput'

interface ItemDetailsTitleProps extends ProductDetailsProps {
	handleAddToCart: () => void
	handleAddToWishlist: () => void
	quantity: number
	setQuantity: (quantity: number) => void
	styles: Record<string, string>
}

export const ItemDetailsTitle = ({
	handleAddToCart,
	handleAddToWishlist,
	setQuantity,
	quantity,
	styles,
	title,
	author,
	availability,
	price,
	publisher,
	stock,
}: // deliveryPrice,
ItemDetailsTitleProps) => {
	return (
		<div className={styles.detailsContainer}>
			<div className={styles.titleSection}>
				<h3>{title}</h3>
				{isAuth() && (
					<Tooltip title='Добави в любими'>
						<IconButton
							className={styles.likeButton}
							onClick={handleAddToWishlist}
							aria-label='add to wishlist'
						>
							<FavoriteBorderIcon />
						</IconButton>
					</Tooltip>
				)}
			</div>
			<div className={styles.authorDetails}>
				<span>{author}</span>
				<span>{publisher}</span>
			</div>
			<div className={styles.availability}>{availability}</div>
			<div className={styles.priceSection}>
				<div className={styles.price}>{price} лв.</div>
				{/* <div className={styles.deliveryPrice}>Доставка: {deliveryPrice}</div> */}
				<Box
					component={'p'}
					sx={{ color: `${stock > 0 ? 'green' : 'red'}`, fontWeight: 'bold' }}
				>
					{stock > 0 ? 'В наличност' : 'Изчерпани количества'}
				</Box>
			</div>
			<div className={styles.actions}>
				{/* <IconButton
					className={styles.cartButton}
					onClick={handleBuyNow}
					aria-label='buy now'
				>
					Купи сега
				</IconButton> */}

				<div className={styles.cartContainer}>
					<Button
						onClick={handleAddToCart}
						aria-label='add to cart'
						color='secondary'
						variant='contained'
					>
						<ShoppingCartIcon /> Добави в количка
					</Button>

					<QuantityInput quantity={quantity} setQuantity={setQuantity} />
				</div>
			</div>
		</div>
	)
}
