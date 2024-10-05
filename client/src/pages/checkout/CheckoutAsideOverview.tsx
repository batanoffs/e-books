import { Button, Paper, Typography, Box } from '@mui/material'
import formatCurrencyToBGN from '../../utils/helpers/formatCurrency'
import { useEffect, useState } from 'react'
import useCartStore from '../../store/cart'
import { ProductsTable } from '../../components/Tables/ProductsTable'

export const CheckoutOverview = ({ handleBackToCart }) => {
	const cart = useCartStore((state) => state.cart)
	const [totalSum, setTotalSum] = useState(0)

	useEffect(() => {
		const calculateTotalSum = () => {
			const total = cart.reduce((acc, item) => {
				return acc + item.product.price * item.quantity
			}, 0)
			setTotalSum(total)
		}

		calculateTotalSum()
	}, [cart])

	return (
		<Paper sx={{ padding: '1rem' }}>
			<Typography variant='h5' align='center'>
				Обобщение на поръчката
			</Typography>
			<ProductsTable products={cart} />

			<Typography align='center' variant='h6' sx={{ marginTop: '1em' }}>
				Обща стойност: {formatCurrencyToBGN(totalSum)}
			</Typography>

			<Box sx={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '1em' }}>
				<Button onClick={handleBackToCart} variant='contained' color='primary'>
					Назад
				</Button>
				<Button type='submit' variant='contained' color='secondary'>
					Плащане
				</Button>
			</Box>
		</Paper>
	)
}
