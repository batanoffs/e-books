import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'
import formatCurrencyToBGN from '../../utils/helpers/formatCurrency'
import useAlertStore from '../../store/alert'
import { useLoginModal } from '../../store/helperModal'
import authGuards from '../../middlewares/guards'
import useCartStore from '../../store/cart'
import cartService from '../../services/cartService'
import { Product } from '../../interfaces/product.interface'
import { Box, useTheme, Typography} from '@mui/material'

interface CarouselCard {
	product: Product
	styles: Record<string, string>
}

export const CarouselCard = ({ product, styles }: CarouselCard) => {
	const { picture, title, author, productType, price, description, _id } = product
	const formatCurrency = formatCurrencyToBGN(price)
	const showAlert = useAlertStore((state) => state.showAlert)
	const toggleOpen = useLoginModal((state) => state.toggleOpen)
	const addToCart = useCartStore((state) => state.addToCart)
	const navigate = useNavigate()
	const theme = useTheme()

	const onGoToDetails = (e) => {
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

	const onAddToCart = async () => {
		const isUserAuthenticated = authGuards.isAuth()
		if (!isUserAuthenticated) {
			toggleOpen()
			return showAlert('Моля, влезте в акаунта си, за да продължите', 'info')
		}

		addToCart(product, 1)
		await cartService.addOne(_id, productType)
		navigate(`/cart`)
		showAlert(`${title} е добавен в количката`, 'success')
	}

	return (
		<Box
			className={styles.container}
			sx={{ backgroundColor: theme.palette.background.carousel }}
		>
			<div className={styles.textContainer}>
				<Typography color={'text.secondary'}variant='h1'>{title}</Typography>
				<Typography color={'text.primary'}variant='h5'>{author}</Typography>
				<Typography color={'text.primary'}variant='h5'>{formatCurrency}</Typography>
				<Typography color={'text.disabled'}variant='body1' className={styles.description}>{description}</Typography>
				<div className={styles.buttonsContainer}>
					<Button
						variant='contained'
						color='primary'
						className={styles.button}
						onClick={onAddToCart}
					>
						Купи
					</Button>
					<Button
						variant='contained'
						className={styles.button}
						data-type={productType}
						color='secondary'
						onClick={onGoToDetails}
					>
						Виж детайли
					</Button>
				</div>
			</div>
			<div>
				<img className={styles.image} src={picture} alt={title} />
			</div>
		</Box>
	)
}
