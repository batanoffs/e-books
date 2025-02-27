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
import { ListIsEmpty } from '../../components/utils/ListIsEmpty'
import { useAlert } from '../../hooks/useAlert'

const CartList = () => {
	const [isUpdateButtonDisabled, setIsUpdateButtonDisabled] = useState(true)
	// const updateQuantity = useCartStore((state) => state.updateQuantity)
	const clearCart = useCartStore((state) => state.clearCart)
	const { showAlert } = useAlert()
	const cart = useCartStore((state) => state.cart)
	const { dialog, confirm } = useConfirm()

	const getTotalItems = () => cart.reduce((sum, item) => sum + item.quantity, 0)

	const clearCartHandler = async () => {
		try {
			const result = await confirm(
				'ВНИМАНИЕ! Изчистване на всички продукти от количката!',
				'Сигурни ли сте, че искате да изтриете всички продукти от количката?'
			)
			if (result) {
				await cartService.removeAll()
				clearCart()
				showAlert(`Количката е изчитена успешно`, 'success')
			}
		} catch (error) {
			showAlert(`Грешка при изчистването на количката ${error}`, 'error')
		}
	}

	//TODO finish logic for update cart
	const updateCartHandler = async (e) => {
		// const inputs = e.target.parentElement.parentElement.querySelectorAll('input')
		// const values = []
		// inputs.forEach((input) => values.push(input.value))
		// const promises = cart.map((item) =>
		// 	updateQuantity(item.product._id, values[cart.indexOf(item)])
		// )
		// const response = await Promise.all(promises)
		// if (response) setIsUpdateButtonDisabled(true)
		// if (response) {
		// 	//TODO updated backend quantity of the current items in the cart
		// }
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
			{cart?.length === 0 && <ListIsEmpty />}
			{cart?.length > 0 && (
				<Grid container spacing={0}>
					{cart.map((item) => (
						<Grid item xs={12} key={item.product._id}>
							<CartItem
								product={item.product}
								quantity={item.quantity}
								onChangeQuantity={onChangeQuantityHandler}
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
