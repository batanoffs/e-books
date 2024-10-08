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
					{order?.products?.map((product) => {
						return (
							<>
								<CardMedia
									component='img'
									image={product?.productId?.picture || ''}
									alt={product?.productId?.title || ''}
									sx={{
										width: 120,
										height: 120,
										marginRight: 2,
										objectFit: 'cover',
									}}
								/>

								<Box>
									<Typography variant='h6'>{product?.productId?.title}</Typography>
									<Typography variant='body2' color='textSecondary'>
										{product?.quantity} x {product?.productId?.price} лв.
									</Typography>
									<Typography variant='body1' color='textPrimary'>
										Общо: {order?.total} лв.
									</Typography>
								</Box>
							</>
						)
					})}
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
						Поръчай отново
					</Button>
					<Button
						variant='outlined'
						color='secondary'
						onClick={() => alert('Премахване на поръчка...')}
						sx={{ marginTop: 1, marginLeft: 1 }}
					>
						Архивирай
					</Button>
				</Box>
			</Paper>
		</Grid>
	)
}
