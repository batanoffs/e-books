import { Box, Button, Typography, TextField } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import formatCurrencyToBGN from '../../utils/helpers/formatCurrency'
import { getUserId } from '../../utils/helpers/auth'

const CartItem = ({ item, removeFromCart, updateQuantity }) => {
	const removeProductFromCart = async () => {
		const userId = await getUserId()
		await removeFromCart(item.productId, userId)
	}
	return (
		<Box
			display='flex'
			alignItems='center'
			sx={{ borderBottom: '1px solid #ddd', paddingBottom: 2, marginBottom: 2 }}
		>
			<Box sx={{ width: '10%', marginRight: 2 }}>
				<img src={item.product.coverImagePath} alt={item.product.title} style={{ width: '80px' }} />
			</Box>
			<Box sx={{ width: '30%' }}>
				<Typography variant='h6' component='h2'>
					{item.product.title}
				</Typography>
			</Box>

			{/* <Box sx={{ width: '10%' }}>
				<Typography variant='body1' component='p'>
					{item.productType}
				</Typography>
			</Box> */}

			<Box sx={{ width: '15%' }}>
				<TextField
					type='number'
					value={item.quantity}
					onChange={(e) => updateQuantity(item.product.id, parseInt(e.target.value))}
					inputProps={{ min: 1 }}
					sx={{ width: '100px', marginY: 1 }}
				/>
			</Box>

			<Box sx={{ width: '20%' }}>
				<Typography variant='body1' component='p'>
					Цена: {formatCurrencyToBGN(item.product.price * item.quantity)}
				</Typography>
			</Box>
			<Box sx={{ width: '5%' }}>
				<Button variant='text' color='error' onClick={removeProductFromCart}>
					<DeleteIcon />
				</Button>
			</Box>
		</Box>
	)
}

export default CartItem
