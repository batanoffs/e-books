import { useNavigate } from 'react-router-dom'
import { Box, Button, Paper, Typography, Grid } from '@mui/material'
import useCartStore from '../../store/cart'
import formatCurrencyToBGN from '../../utils/helpers/formatCurrency'

const CartInfo = () => {
	const cart = useCartStore((state) => state.cart)
	const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
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
					<Typography variant='h7'>Общо: {formattedTotal}</Typography>
					<Button
						variant='contained'
						color='info'
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
