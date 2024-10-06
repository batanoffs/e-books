import { useCallback, useEffect, useState } from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { Order } from '../../interfaces/order.interface'
import { orderService } from '../../services/orderService'
import { useNavigate } from 'react-router-dom'
import { OrderTabs } from './OrdersTabs'
import { OrderItems } from './OrdersItem'

export const OrdersPage = () => {
	const [orders, setOrders] = useState<Order[]>([])
	const [filteredOrders, setFilteredOrders] = useState<Order[]>([])
	const [status, setStatus] = useState<string>('all')
	const navigate = useNavigate()

	const fetchUserOrders = useCallback(async () => {
		const response = await orderService.getUserOrders()
		setOrders(response.data)
	}, [])

	useEffect(() => {
		fetchUserOrders()
	}, [fetchUserOrders])

	const handleStatusChange = (event: React.SyntheticEvent, newValue: string) => {
		setStatus(newValue)
	}

	useEffect(() => {
		if (status === 'all') {
			setFilteredOrders(orders)
		} else {
			setFilteredOrders(orders.filter((order) => order.shippingStatus === status))
		}
	}, [orders, status])

	const handleViewOrder = (orderId: string) => {
		navigate(`/orders/${orderId}`)
	}
	return (
		<Box sx={{ flexGrow: 1 }}>
			<Typography variant='h5' gutterBottom>
				Поръчки
			</Typography>

			<OrderTabs status={status} handleStatusChange={handleStatusChange} />

			<Grid container spacing={2}>
				{filteredOrders.map((order: Order) => (
					<OrderItems key={order._id} order={order} navigate={navigate} />
				))}
			</Grid>
		</Box>
	)
}
