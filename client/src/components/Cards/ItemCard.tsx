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

export const ItemCard = ({ product }: { product: Product }) => {
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
		addToCart(product, 1)
		await cartService.addOne(_id, productType)
		showAlert('Успешно добавен продукт', 'success')
	}

	const addToWishlistHandler = async () => {
		const isUserAuthenticated = authGuards.isAuth()
		if (!isUserAuthenticated) {
			toggleOpen()
			return showAlert('Моля, влезте в акаунта си, за да продължите', 'info')
		}
		if (!_id) {
			return showAlert('Възникна грешка - продуктът не е намерен', 'error')
		}

		const response = await axios.post(
			API.WISHLIST,
			{ productId: _id },
			{ withCredentials: true }
		)

		if (response.status === 200) {
			showAlert('Успешно добавен продукт', 'success')
		}
	}

	const goToDetailsHandler = (e) => {
		const target = e.target.closest('[data-type]')
		const getType = target.dataset.type
		let type

		if (getType !== 'Stationery') {
			type = productType.toLowerCase() + 's'
		} else {
			type = getType.toLowerCase()
		}

		navigate(`/catalog/${type}/${_id}`)
	}

	return (
		<div key={_id} className={styles.container} data-id={_id}>
			<div
				className={styles.bookImageContainer}
				data-type={productType}
				onClick={goToDetailsHandler}
			>
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
