import { Grid, Paper, Box, Typography, CardMedia, Button } from '@mui/material'

export const OrderItems = ({ order, navigate }) => {
	return (
		<Grid item xs={12} key={order._id}>
			<Paper
				elevation={1}
				sx={{
					padding: 2,
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				{/* Product Details */}
				<Box sx={{ display: 'flex', alignItems: 'center' }}>
					<CardMedia
						component='img'
						image={order.products[0].productId.picture}
						alt={order.products[0].productId.title}
						sx={{
							width: 120,
							height: 120,
							marginRight: 2,
							objectFit: 'cover',
						}}
					/>
					<Box>
						<Typography variant='h6'>{order.products[0].productId.title}</Typography>
						<Typography variant='body2' color='textSecondary'>
							{order.products[0].quantity} x {order.products[0].productId.price} лв.
						</Typography>
						<Typography variant='body1' color='textPrimary'>
							Общо: {order.total} лв.
						</Typography>
					</Box>
				</Box>

				{/* Order Actions */}
				<Box sx={{ textAlign: 'right' }}>
					<Typography variant='body2' color='textSecondary'>
						Дата на поръчката: {new Date(order.createdAt).toLocaleDateString()}
					</Typography>
					<Typography variant='body2' color='textSecondary'>
						Номер на поръчката: {order._id}
					</Typography>
					<Button
						variant='contained'
						color='warning'
						onClick={() => navigate(`/buy-again/${order.products[0].productId._id}`)}
						sx={{ marginTop: 1 }}
					>
						Добави в количката
					</Button>
					<Button
						variant='outlined'
						color='secondary'
						onClick={() => alert('Премахване на поръчка...')}
						sx={{ marginTop: 1, marginLeft: 1 }}
					>
						Премахни
					</Button>
				</Box>
			</Paper>
		</Grid>
	)
}
