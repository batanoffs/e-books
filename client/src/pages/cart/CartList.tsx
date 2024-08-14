import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

import CartItem from './CartItem'
import { getUserId } from '../../utils/helpers/auth'
import useCartStore from '../../store/cart'

export const CartList = () => {
	const cart = useCartStore((state) => state.cart)
	const clearCart = useCartStore((state) => state.clearCart)
	const updateQuantity = useCartStore((state) => state.updateQuantity)
	const removeFromCart = useCartStore((state) => state.removeFromCart)

	const getTotalItems = () => cart.reduce((sum, item) => sum + item.quantity, 0)

	const clearCartHandler = async () => {
		//TODO add confirmation
		const userId = await getUserId()
		await clearCart(userId)
	}

	const updateCartHandler = async () => {
		//TODO
		console.log('updateCartHandler')
	}

	console.log('cart:', cart)

	return (
		<Paper
			sx={{
				width: '100%',
				minWidth: 400,
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
						<Grid item xs={12} key={item.product.id}>
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
							Изчистване
						</Button>
						<Button
							variant='contained'
							color='info'
							disabled
							onClick={updateCartHandler}
						>
							Обновяване
						</Button>
					</Box>
				</Grid>
			)}
		</Paper>
	)
}
