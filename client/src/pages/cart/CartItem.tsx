import { Button, Typography, TextField, Grid } from '@mui/material'

const CartItem = ({ item, removeFromCart, updateQuantity }) => (
	<Grid
		container
		spacing={2}
		alignItems='center'
		sx={{ borderBottom: '1px solid #ddd', paddingBottom: 2, marginBottom: 2 }}
	>
		<Grid item xs={4}>
			<img src={item.imageUrl} alt={item.name} style={{ width: '100%' }} />
		</Grid>
		<Grid item xs={8}>
			<Typography variant='h6' component='h2'>
				{item.name}
			</Typography>
			<Typography variant='body1' component='p'>
				Price: {item.price} лв.
			</Typography>
			<Typography variant='body1' component='p'>
				Type: {item.productType}
			</Typography>
			<TextField
				type='number'
				value={item.quantity}
				onChange={(e) => updateQuantity(item.productId, parseInt(e.target.value))}
				inputProps={{ min: 1 }}
				sx={{ width: '100px', marginY: 1 }}
			/>
			<Button
				variant='contained'
				color='secondary'
				onClick={() => removeFromCart(item.productId)}
				sx={{ marginTop: 1 }}
			>
				Remove
			</Button>
		</Grid>
	</Grid>
)

export default CartItem
