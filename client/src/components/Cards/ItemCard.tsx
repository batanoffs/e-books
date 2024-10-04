import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Favorite from '@mui/icons-material/Favorite'
import ShoppingCart from '@mui/icons-material/ShoppingCart'

import formatCurrencyToBGN from '../../utils/helpers/formatCurrency'
import useCartStore from '../../store/cart'
import useAlertStore from '../../store/alert'
import { useLoginModal } from '../../store/helperModal'
import authGuards from '../../middlewares/guards'
import cartService from '../../services/cartService'
import API from '../../utils/constants/api'
import { Product } from '../../interfaces/product.interface'

import styles from './itemcard.module.scss'

const ItemCard = ({ product }: { product: Product }) => {
	const showAlert = useAlertStore((state) => state.showAlert)
	const addToCart = useCartStore((state) => state.addToCart)
	const toggleOpen = useLoginModal((state) => state.toggleOpen)
	const navigate = useNavigate()

	const { _id, title, author, productType, price, picture } = product

	const formattedPrice = formatCurrencyToBGN(price)

	const addToCartHandler = async () => {
		const isUserAuthenticated = authGuards.isAuth()
		if (!isUserAuthenticated) {
			toggleOpen()
			return showAlert('Моля, влезте в акаунта си, за да продължите', 'info')
		}
		const currentItem = {
			product: {
				_id,
				picture,
				title,
				price,
				productType,
			},
			quantity: 1,
		}
		addToCart(currentItem)
		await cartService.addOne(_id)
		showAlert('Успешно добавен продукт', 'success')
	}

	const addToWishlistHandler = async () => {
		const isUserAuthenticated = authGuards.isAuth()
		if (!isUserAuthenticated) {
			toggleOpen()
			return showAlert('Моля, влезте в акаунта си, за да продължите', 'info')
		}
		if (!_id) {
			console.log('productId not found')
			return showAlert('Възникна грешка - продуктът не е намерен', 'error')
		}

		const response = await axios.post(
			API.WISHLIST,
			{ productId: _id },
			{
				withCredentials: true,
			}
		)

		if (response.status === 200) {
			showAlert('Успешно добавен продукт', 'success')
		}
	}

	const goToDetailsHandler = () => {
		navigate(`/catalog/books/all/${_id}`)
	}

	return (
		<div key={_id} className={styles.container} data-id={_id}>
			<div className={styles.bookImageContainer} onClick={goToDetailsHandler}>
				{authGuards.isAuth() && (
					<div className={styles.buttonContainer}>
						<button onClick={addToWishlistHandler}>
							<Favorite />
						</button>
						<button onClick={addToCartHandler}>
							<ShoppingCart />
						</button>
					</div>
				)}
				<img src={picture} alt={title} />
			</div>
			<div className={styles.bookInfo}>
				<h6>{title}</h6>
				<p>{author}</p>
				<p>{formattedPrice}</p>
			</div>
		</div>
	)
}

export default ItemCard
