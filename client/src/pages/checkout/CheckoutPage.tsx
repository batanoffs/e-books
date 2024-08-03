import React, { useState } from 'react'
import useCartStore from '../../store/cart'

import CheckoutPaymentOptions from './CheckoutPaymentOptions'
import DeliveryOptions from './DeliveryOptions'

const CheckoutPage: React.FC = () => {
	const cart = useCartStore(state => state.cart)
	const placeOrder = useCartStore(state => state.placeOrder)
	const [paymentMethod, setPaymentMethod] = useState<string>('')
	const [deliveryMethod, setDeliveryMethod] = useState<string>('')

	const handlePlaceOrder = () => {
		if (!paymentMethod || !deliveryMethod) {
			alert('Please select payment and delivery methods.')
			return
		}
		placeOrder({ id: new Date().toISOString(), items: cart, paymentMethod, deliveryMethod })
	}

	return (
		<div>
			<h1>Checkout</h1>
			<h2>Review your order</h2>
			<ul>
				{cart.map(item => (
					<li key={item.id}>
						<h3>{item.title}</h3>
						<p>Price: {item.price}</p>
						<p>Quantity: {item.quantity}</p>
					</li>
				))}
			</ul>
			<CheckoutPaymentOptions onChange={method => setPaymentMethod(method)} />
			<DeliveryOptions onChange={method => setDeliveryMethod(method)} />
			<button onClick={handlePlaceOrder}>Place Order</button>
		</div>
	)
}

export default CheckoutPage
