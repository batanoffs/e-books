import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import useCartStore from '../../store/cart'
import formatCurrencyToBGN from '../../utils/helpers/formatCurrency'

const CartInfo = () => {
	const cart = useCartStore((state) => state.cart)
	const total = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0)

	const formattedTotal = formatCurrencyToBGN(total)
	const navigate = useNavigate()

	const onPaymentHandler = () => {
		navigate('/checkout')
	}

	return (
		<Paper
			sx={{
				width: '100%',
				minWidth: 200,
				maxWidth: 300,
				padding: 2,
			}}
		>
			<Grid item xs={12}>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						gap: 4,
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					<Typography variant='h6'>Общо: {formattedTotal}</Typography>
					<Button
						variant='contained'
						color='secondary'
						size='large'
						onClick={onPaymentHandler}
					>
						Плащане
					</Button>
				</Box>
			</Grid>
		</Paper>
	)
}

export default CartInfo
