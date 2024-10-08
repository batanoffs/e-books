import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import API from '../../utils/constants/api'
import { Product } from '../../interfaces/product.interface'
import { Box, Grid, Typography, List, ListItem, ListItemText, Divider, Paper } from '@mui/material'
import useAlertStore from '../../store/alert'
import formatCurrencyToBGN from '../../utils/helpers/formatCurrency'

export const PaymentSuccessful = () => {
	const [orderData, setOrderData] = useState<any | null>(null)
	const showAlert = useAlertStore((state) => state.showAlert)

	const fetchOrder = useCallback(async (sessionId: string | null) => {
		if (!sessionId) return

		try {
			const response = await axios.get(API.CHECKOUT + 'session-status', {
				params: {
					session_id: sessionId,
				},
			})

			setOrderData(response.data)
		} catch (error) {
			showAlert(
				`Възникна грешка при извличането на поръчката, моля презаредете страницата`,
				'error'
			)
		}
	}, [])

	useEffect(() => {
		const queryString = window.location.search
		const urlParams = new URLSearchParams(queryString)
		const sessionId = urlParams.get('session_id')
		if (sessionId) {
			fetchOrder(sessionId)
		}
	}, [fetchOrder])

	const nameData = orderData?.shipping_details?.name || null
	const name = nameData ? nameData[0]?.toUpperCase() + nameData.slice(1) : null
	const totalCost = formatCurrencyToBGN(orderData?.total)

	return (
		<Box
			id='success'
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				margin: '0 auto',
				padding: '2rem',
				width: '60%',
			}}
		>
			{orderData ? (
				<Paper
					sx={{
						padding: '1rem',
						backgroundColor: 'background.paper',
					}}
				>
					<Typography variant='h3' color={'primary.main'} gutterBottom align='center'>
						{name ? `${name},` : ''} Благодарим за Вашата поръчка!
					</Typography>
					<List>
						<Box
							sx={{
								m: '0 auto',
								width: '30%',
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'flex-start',
							}}
						>
							<ListItemText
								secondaryTypographyProps={{ fontSize: '1rem' }}
								primary='Номер на поръчката:'
								secondary={orderData._id}
							/>
							<ListItemText
								primary='Дата на поръчката:'
								secondary={new Date(orderData.createdAt).toLocaleString()}
								secondaryTypographyProps={{ fontSize: '1rem' }}
							/>
							<ListItemText
								primary='Статус на поръчката:'
								secondary={orderData.shippingStatus}
								secondaryTypographyProps={{ fontSize: '1rem' }}
							/>
							<ListItemText
								primary='Адрес:'
								secondary={
									orderData.shipping_details.address.city +
									', ' +
									orderData.shipping_details.address.country +
									', ' +
									orderData.shipping_details.address.postalCode?.toString()
								}
								secondaryTypographyProps={{ fontSize: '1rem' }}
							/>
							<ListItemText
								primary='Доставчик:'
								secondary={
									orderData.shipping_details.address.city +
									', ' +
									orderData.shipping_details.address.country +
									', ' +
									orderData.shipping_details.address.postalCode?.toString()
								}
								secondaryTypographyProps={{ fontSize: '1rem' }}
							/>
							<ListItemText
								primary='Дължима сума:'
								secondary={totalCost}
								secondaryTypographyProps={{ fontSize: '1.2rem' }}
							/>
						</Box>
						<Divider />
						<ListItem>
							<ListItemText primary='Продукти:' />
						</ListItem>
						{orderData?.products?.map((product: Product) => (
							<ListItem
								key={product.productId._id}
								sx={{ display: 'inline-flex', flexWrap: 'wrap', padding: '0.5rem' }}
							>
								<Grid container spacing={1} width={300}>
									<Grid item xs={12} sm={4}>
										<img
											src={product.productId.picture}
											alt={product.productId.title}
											style={{ width: '80px', height: 'auto' }}
										/>
									</Grid>
									<Grid item xs={12} sm={8}>
										<Typography variant='body2' gutterBottom>
											{product.productId.title}
										</Typography>
										<Typography variant='body2' gutterBottom>
											Количество: {product.quantity}
										</Typography>
										<Typography variant='body2' gutterBottom>
											Цена: {product.productId.price} лв.
										</Typography>
									</Grid>
								</Grid>
							</ListItem>
						))}
					</List>
					<Typography width='100%' variant='body1' gutterBottom align='center'>
						Ние ценим вашите покупки! Потвърждаващ имейл ще ви бъде изпратен на{' '}
						<b>{orderData.customer_details.email}</b>. Ако имате въпроси, моля, свържете
						се на имейл: <a href='mailto:orders@example.com'>orders@example.com</a>.
					</Typography>
				</Paper>
			) : (
				<Paper>
					<Typography variant='h3' gutterBottom align='center'>
						Възникна грешка, моля опитайте отново!
					</Typography>

					<Typography variant='body1' gutterBottom align='center'>
						Липсва информация за вашата поръчка.
					</Typography>
				</Paper>
			)}
		</Box>
	)
}
