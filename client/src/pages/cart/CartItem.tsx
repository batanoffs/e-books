import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import DeleteIcon from '@mui/icons-material/Delete'

import useConfirm from '../../hooks/useConfirm'
import useCartStore from '../../store/cart'
import cartService from '../../services/cartService'
import formatCurrencyToBGN from '../../utils/helpers/formatCurrency'
import QuantityInput from '../../components/QuantityInput/QuantityInput'
import { useAlert } from '../../hooks/useAlert'

interface CartProductProps {
	product: {
		_id: string
		picture: string
		title: string
		price: number
	}
	onChangeQuantity: any
	quantity: number
}
const CartItem = ({ product, onChangeQuantity, quantity }: CartProductProps) => {
	const { showAlert } = useAlert()
	const removeFromCart = useCartStore((state) => state.removeFromCart)
	const { dialog, confirm } = useConfirm()

	const handleRemoveProduct = async () => {
		try {
			const alert = await confirm(
				'Изтриване',
				'Сигурни ли сте, че искате да изтриете този продукт?'
			)

			if (alert) {
				await cartService.removeOne(product._id)
				removeFromCart(product._id)
				showAlert('Успешно изтрит продукт', 'success')
			}
		} catch (error) {
			showAlert('Грешка при изтриване', 'error')
		}
	}

	return (
		<Box
			display='flex'
			alignItems='center'
			sx={{ borderBottom: '1px solid #ddd', paddingBottom: 2, marginBottom: 2 }}
		>
			{dialog}

			<Box sx={{ width: '10%', marginRight: 2 }}>
				<img src={product.picture} alt={product.title} style={{ width: '80px' }} />
			</Box>
			<Box sx={{ width: '30%' }}>
				<Typography variant='h6' component='h2'>
					{product.title}
				</Typography>
			</Box>

			<Box sx={{ width: '15%' }}>
				<QuantityInput quantity={quantity} onChangeQuantity={onChangeQuantity} />
				{/* onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))} */}
			</Box>

			<Box sx={{ width: '20%' }}>
				<Typography variant='body1' component='p'>
					Цена: {formatCurrencyToBGN(product.price * quantity)}
				</Typography>
			</Box>
			<Box sx={{ width: '5%' }}>
				<Button variant='text' color='error' onClick={handleRemoveProduct}>
					<DeleteIcon />
				</Button>
			</Box>
		</Box>
	)
}

export default CartItem
