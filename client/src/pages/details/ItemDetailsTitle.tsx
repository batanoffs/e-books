import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

import authGuards from '../../middlewares/guards'
import ProductDetailsProps from '../../interfaces/ProductDetailsProps.interface'
import QuantityInput from '../../components/QuantityInput/QuantityInput'
import { Product } from '../../interfaces/product.interface'
import { useLoginModal } from '../../store/helperModal'
import useAlertStore from '../../store/alert'
import useCartStore from '../../store/cart'
import cartService from '../../services/cartService'
import wishlistService from '../../services/wishlistService'

interface ItemDetailsTitleProps extends ProductDetailsProps {
	setQuantity: (quantity: number) => void
	styles: Record<string, string>
	quantity: number
	product: Product
}

const ItemDetailsTitle = ({ setQuantity, quantity, styles, product }: ItemDetailsTitleProps) => {
	const toggleOpen = useLoginModal((state) => state.toggleOpen)
	const showAlert = useAlertStore((state) => state.showAlert)
	const addToCart = useCartStore((state) => state.addToCart)

	const handleAddToCart = async (event: Event) => {
		try {
			const isUserAuthenticated = authGuards.isAuth()
			if (!isUserAuthenticated) {
				toggleOpen()
				return showAlert('Моля, влезте в акаунта си, за да продължите', 'info')
			}
			const target = event.target
			const currentItem = {
				product: {
					_id: product._id,
					picture: product.picture,
					title: product.title,
					price: product.price,
				},
				quantity: quantity,
			}
			const quantityInputElement = target?.parentElement.querySelector('input')
			const quantityValue = Number(quantityInputElement.value)
			await cartService.addMany(currentItem.product, quantityValue)
			addToCart(currentItem)
			showAlert('Успешно добавен продукт', 'success')
		} catch (error) {
			showAlert('Грешка при добавяне', 'error')
		}
	}

	const handleAddToWishlist = async () => {
		const productId = product._id
		try {
			await wishlistService.add(productId)
			showAlert('Успешно добавен продукт в любими', 'success')
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<div className={styles.detailsContainer}>
			<div className={styles.titleSection}>
				<h3>{product.title}</h3>
				{authGuards.isAuth() && (
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
				<span>{product.author}</span>
				<span>{product.publisher}</span>
			</div>
			<div className={styles.availability}>{product.availability}</div>
			<div className={styles.priceSection}>
				<div className={styles.price}>{product.price} лв.</div>
				{/* <div className={styles.deliveryPrice}>Доставка: {deliveryPrice}</div> */}
				<Box
					component={'p'}
					sx={{ color: `${product.stock > 0 ? 'green' : 'red'}`, fontWeight: 'bold' }}
				>
					{product.stock > 0 ? 'В наличност' : 'Изчерпани количества'}
				</Box>
			</div>
			<div className={styles.actions}>
				<div className={styles.cartContainer}>
					<Button
						onClick={handleAddToCart}
						aria-label='add to cart'
						color='secondary'
						variant='contained'
					>
						<ShoppingCartIcon /> Добави в количка
					</Button>

					<QuantityInput quantity={quantity} onChangeQuantity={setQuantity} />
				</div>
			</div>
		</div>
	)
}

export default ItemDetailsTitle
