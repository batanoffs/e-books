import useCartStore from '../../store/cart'

const OrderDetailsPage = () => {
	const order = useCartStore((state) => state.order)

	if (!order) {
		return <p>No order details available</p>
	}

	return (
		<div>
			<h1>Order Details</h1>
			<p>Order ID: {order.id}</p>
			<h2>Items</h2>
			{order.items.map((item) => (
				<div key={item.id}>
					<h3>{item.title}</h3>
					<p>Price: {item.price}</p>
					<p>Quantity: {item.quantity}</p>
				</div>
			))}
			<h2>Delivery Method</h2>
			<p>{order.deliveryMethod}</p>
			<h2>Payment Method</h2>
			<p>{order.paymentMethod}</p>
		</div>
	)
}

export default OrderDetailsPage
