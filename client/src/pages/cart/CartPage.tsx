import { Box, Button, Paper, Typography, Grid } from '@mui/material'
import { useEffect } from 'react'
import axios from 'axios'

import { API } from '../../utils/constants/api'
import useCartStore from '../../store/cart'
import { getUserId } from '../../utils/helpers/auth'
import CartItem from './CartItem'

const CartPage = () => {
	const cart = useCartStore((state) => state.cart)
	const removeFromCart = useCartStore((state) => state.removeFromCart)
	const updateQuantity = useCartStore((state) => state.updateQuantity)

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

	const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column',
				minHeight: '90vh',
				padding: 2,
			}}
		>
			<Paper
				sx={{
					width: '100%',
					maxWidth: 800,
					padding: 2,
				}}
			>
				{cart.length === 0 ? (
					<Typography variant='body1' component='p' align='center'>
						Your cart is empty
					</Typography>
				) : (
					<Grid container spacing={2}>
						{cart.map((item) => (
							<Grid item xs={12} key={item.productId}>
								<CartItem
									item={item}
									removeFromCart={removeFromCart}
									updateQuantity={updateQuantity}
								/>
							</Grid>
						))}

						<Grid item xs={12}>
							<Box
								sx={{
									display: 'flex',
									justifyContent: 'space-between',
									alignItems: 'center',
									marginTop: 2,
								}}
							>
								<Typography variant='h6'>Total: {total} лв.</Typography>
								<Button variant='contained' color='primary' size='large'>
									Checkout
								</Button>
							</Box>
						</Grid>
					</Grid>
				)}
			</Paper>
		</Box>
	)
}

export default CartPage
