import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'
import formatCurrencyToBGN from '../../utils/helpers/formatCurrency'
import useAlertStore from '../../store/alert'
import { useLoginModal } from '../../store/helperModal'
import authGuards from '../../middlewares/guards'
import useCartStore from '../../store/cart'
import cartService from '../../services/cartService'

interface CarouselCard {
	book: {
		_id: string
		title: string
		author: string
		coverImagePath: string
		description: string
		price: number
		category: string
		stock: number
	}
	styles: Record<string, string>
}

export const CarouselCard = ({ book, styles }: CarouselCard) => {
	const { coverImagePath, title, author, price, description, _id } = book
	const formatCurrency = formatCurrencyToBGN(price)
	const showAlert = useAlertStore((state) => state.showAlert)
	const navigate = useNavigate()
	const toggleOpen = useLoginModal((state) => state.toggleOpen)
	const addToCart = useCartStore((state) => state.addToCart)
	const onGoToDetails = () => {
		navigate(`/catalog/books/all/${_id}`)
	}

	const onBuyNow = async () => {
		const isUserAuthenticated = authGuards.isAuth()
		if (!isUserAuthenticated) {
			toggleOpen()
			return showAlert('Моля, влезте в акаунта си, за да продължите', 'info')
		}

		const currentItem = {
			product: {
				id: _id,
				coverImagePath: coverImagePath,
				title: title,
				price: price,
			},
			quantity: 1,
		}
		addToCart(currentItem)
		await cartService.addOne(_id)

		navigate(`/cart`)
		showAlert(`${title} е добавен в количката`, 'success')
	}
	return (
		<div className={styles.container}>
			<div className={styles.textContainer}>
				<h1>{title}</h1>
				<p>{author}</p>
				<p>{formatCurrency}</p>
				<span className={styles.description}>{description}</span>
				<div className={styles.buttonsContainer}>
					<Button
						variant='contained'
						color='secondary'
						className={styles.button}
						onClick={onBuyNow}
					>
						Купи
					</Button>
					<Button variant='contained' className={styles.button} onClick={onGoToDetails}>
						Виж детайли
					</Button>
				</div>
			</div>
			<div>
				<img className={styles.image} src={coverImagePath} alt={title} />
			</div>
		</div>
	)
}
