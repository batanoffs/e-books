import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import DeleteIcon from '@mui/icons-material/Delete'
import formatCurrencyToBGN from '../../utils/helpers/formatCurrency'
import { getUserId } from '../../utils/helpers/auth'
import QuantityInput from '../../components/QuantityInput/QuantityInput'
import useConfirm from '../../hooks/useConfirm'
import useCartStore from '../../store/cart'
import { useAlertStore } from '../../store/alert'

const CartItem = ({ item, onChangeQuantity }) => {
	const { dialog, confirm } = useConfirm()

	const showAlert = useAlertStore((state) => state.showAlert)
	const removeFromCart = useCartStore((state) => state.removeFromCart)

	const handleRemoveProduct = async () => {
		const userId = await getUserId()
		const alert = await confirm(
			'Изтриване',
			'Сигурни ли сте, че искате да изтриете този продукт?'
		)

		if (alert) {
			showAlert('Успешно изтрит продукт', 'success')
			return removeFromCart(item.product.id, userId)
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
				<img
					src={item.product.coverImagePath}
					alt={item.product.title}
					style={{ width: '80px' }}
				/>
			</Box>
			<Box sx={{ width: '30%' }}>
				<Typography variant='h6' component='h2'>
					{item.product.title}
				</Typography>
			</Box>

			<Box sx={{ width: '15%' }}>
				<QuantityInput quantity={item.quantity} onChangeQuantity={onChangeQuantity} />
				{/* onChange={(e) => updateQuantity(item.product.id, parseInt(e.target.value))} */}
			</Box>

			<Box sx={{ width: '20%' }}>
				<Typography variant='body1' component='p'>
					Цена: {formatCurrencyToBGN(item.product.price * item.quantity)}
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
