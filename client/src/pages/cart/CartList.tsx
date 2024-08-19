import { useState } from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

import CartItem from './CartItem'
import useCartStore from '../../store/cart'
import useConfirm from '../../hooks/useConfirm'
import cartService from '../../services/cartService'
import authService from '../../services/authService'

const CartList = () => {
	const [isUpdateButtonDisabled, setIsUpdateButtonDisabled] = useState(true)
	const { dialog, confirm } = useConfirm()

	const updateQuantity = useCartStore((state) => state.updateQuantity)
	const clearCart = useCartStore((state) => state.clearCart)
	const cart = useCartStore((state) => state.cart)

	const getTotalItems = () => cart.reduce((sum, item) => sum + item.quantity, 0)

	const clearCartHandler = async () => {
		const userId = await authService.getUserId()
		const result = await confirm(
			'Изчистане на всички продукти',
			'Сигурни ли сте, че искате да изчистите количката?'
		)
		if (result) {
			await cartService.removeAll(userId)
			clearCart()
		}
	}

	const updateCartHandler = async (e) => {
		console.log('event:', e.target)
		const inputs = e.target.parentElement.parentElement.querySelectorAll('input')
		const values = []
		inputs.forEach((input) => values.push(input.value))
		console.log('inputs:', inputs)
		console.log('values:', values)

		const promises = cart.map((item) =>
			updateQuantity(item.product.id, values[cart.indexOf(item)])
		)
		const response = await Promise.all(promises)

		if (response) setIsUpdateButtonDisabled(true)
		if (response) {
			//TODO updated backend quantity of the current items in the cart
		}
	}

	const onChangeQuantityHandler = () => {
		setIsUpdateButtonDisabled(false)
	}
	return (
		<Paper
			sx={{
				width: '100%',
				minWidth: 400,
				padding: 2,
			}}
		>
			{dialog}
			{cart.length === 0 ? (
				<Typography variant='body1' component='p' align='center'>
					Вашата количка е празна
				</Typography>
			) : (
				<Grid container spacing={0}>
					{cart.map((item) => (
						<Grid item xs={12} key={item.product.id}>
							<CartItem item={item} onChangeQuantity={onChangeQuantityHandler} />
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
							disabled={isUpdateButtonDisabled}
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

export default CartList
