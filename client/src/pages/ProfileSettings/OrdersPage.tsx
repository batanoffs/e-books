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
	const [shippingStatus, setShippingStatus] = useState<string>('pending') //['pending', 'shipped', 'delivered']
	const navigate = useNavigate()

	const fetchUserOrders = useCallback(async () => {
		const response = await orderService.getUserOrders()
		console.log('fetching orders', response.data)
		const sortedOrdersByDate = response.data.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
		setOrders(sortedOrdersByDate)
	}, [])

	useEffect(() => {
		fetchUserOrders()
	}, [fetchUserOrders])

	const handleStatusChange = (event: React.SyntheticEvent, newValue: string) => {
		setShippingStatus(newValue)
	}

	useEffect(() => {
		if (shippingStatus === 'pending') {
			setFilteredOrders(orders.filter((order) => order.shippingStatus === 'pending'))
		} else if (shippingStatus === 'shipped') {
			setFilteredOrders(orders.filter((order) => order.shippingStatus === 'shipped'))
		} else if (shippingStatus === 'delivered') {
			setFilteredOrders(orders.filter((order) => order.shippingStatus === 'delivered'))
		} else {
			setFilteredOrders(orders)
		}
	}, [orders, shippingStatus])

	const handleViewOrder = (orderId: string) => {
		navigate(`/orders/${orderId}`)
	}
	return (
		<Box sx={{ flexGrow: 1 }}>
			<Typography variant='h5' gutterBottom>
				Поръчки
			</Typography>

			<OrderTabs status={shippingStatus} handleStatusChange={handleStatusChange} />

			<Grid container spacing={2}>
				{filteredOrders.map((order: Order) => (
					<OrderItems key={order._id} order={order} navigate={navigate} />
				))}
			</Grid>
		</Box>
	)
}
