import { Box, Button, Paper, Typography, Grid } from '@mui/material'
import { useEffect } from 'react'
import axios from 'axios'

import { API } from '../../utils/constants/api'
import useCartStore from '../../store/cart'
import { getUserId } from '../../utils/helpers/auth'
import CartItem from './CartItem'
import formatCurrencyToBGN from '../../utils/helpers/formatCurrency'

const CartPage = () => {
	const cart = useCartStore((state) => state.cart)
	const updateQuantity = useCartStore((state) => state.updateQuantity)
	const removeFromCart = useCartStore((state) => state.removeFromCart)
	const clearCart = useCartStore((state) => state.clearCart)

	useEffect(() => {
		const fetchCart = async () => {
			try {
				const userId = await getUserId()
				const response = await axios.get(API.CART + userId)
				if (response.data) {
					useCartStore.setState({ cart: response.data.products })
				}
			} catch (error) {
				console.error(error)
			}
		}

		fetchCart()
	}, [])

	const clearCartHandler = async () => {
		const userId = await getUserId()
		await clearCart(userId)
	}

	const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
	const getTotalItems = () => cart.reduce((sum, item) => sum + item.quantity, 0)
	const formattedTotal = formatCurrencyToBGN(total)

	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				gap: 5,
				alignItems: 'flex-start',
				flexDirection: 'row',
				minHeight: '90vh',
				padding: 2,
			}}
		>
			<Paper
				sx={{
					width: '100%',
					minWidth: 400,
					maxWidth: 800,
					padding: 2,
				}}
			>
				{cart.length === 0 ? (
					<Typography variant='body1' component='p' align='center'>
						Вашата количка е празна
					</Typography>
				) : (
					<Grid container spacing={0}>
						{cart.map((item) => (
							<Grid item xs={12} key={item.productId}>
								<CartItem
									item={item}
									removeFromCart={removeFromCart}
									updateQuantity={updateQuantity}
								/>
							</Grid>
						))}

						<Box
							sx={{
								display: 'flex',
								justifyContent: 'space-between',
								gap: 4,
								alignItems: 'center',
								marginX: 'auto',
							}}
						>
							<Typography variant='h6'>
								Общо избрани артикула: {getTotalItems()}
							</Typography>
							<Button variant='contained' color='error' onClick={clearCartHandler}>
								Изчистване на количката
							</Button>
						</Box>
					</Grid>
				)}
			</Paper>
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
						<Button variant='contained' color='info' size='large'>
							Плащане
						</Button>
					</Box>
				</Grid>
			</Paper>
		</Box>
	)
}

export default CartPage
