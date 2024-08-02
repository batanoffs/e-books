import QuantityInput from '../../components/QuantityInput/QuantityInput'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { ProductDetailsProps } from '../../interfaces/ProductDetailsProps.interface'

interface ItemDetailsTitleProps extends ProductDetailsProps {
	handleAddToCart: (itemId: string, itemQuantity: number) => void
	handleBuyNow: () => void
	handleAddToWishlist: () => void
	styles: Record<string, string>
}

export const ItemDetailsTitle = ({
	handleAddToCart,
	handleBuyNow,
	handleAddToWishlist,
	styles,
	title,
	author,
	availability,
	price,
	deliveryPrice,
	_id,
}: ItemDetailsTitleProps) => {
	return (
		<div className={styles.detailsContainer}>
			<div className={styles.titleSection}>
				<h1 className={styles.title}>{title}</h1>
				<Tooltip title='Добави в любими'>
					<IconButton
						className={styles.likeButton}
						onClick={handleAddToWishlist}
						aria-label='add to wishlist'
					>
						<FavoriteBorderIcon />
					</IconButton>
				</Tooltip>
			</div>
			<h2 className={styles.author}>{author}</h2>
			<div className={styles.availability}>{availability}</div>
			<div className={styles.priceSection}>
				<div className={styles.price}>{price} лв.</div>
				<div className={styles.deliveryPrice}>Доставка: {deliveryPrice}</div>
			</div>
			<div className={styles.actions}>
				<IconButton
					className={styles.cartButton}
					onClick={handleBuyNow}
					aria-label='buy now'
				>
					Купи сега
				</IconButton>

				<div className={styles.cartContainer}>
					<IconButton
						className={styles.cartButton}
						onClick={() => handleAddToCart(_id, 1)}
						aria-label='add to wishlist'
					>
						<ShoppingCartIcon /> Добави в количка
					</IconButton>

					<QuantityInput itemId={_id} handleAddToCart={handleAddToCart} />
				</div>
			</div>
		</div>
	)
}
