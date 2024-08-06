import React, { useState } from 'react'
import useCartStore from '../../store/cart'

import PaymentOptions from './PaymentOptions'
import { DeliveryOptions } from './DeliveryOptions'
import { CheckoutLayout } from '../../components/Layout/checkout/CheckoutLayout'
import { CheckoutOverview } from './CheckoutAsideOverview'
import { AddressForm } from './AddressForm'

const CheckoutPage: React.FC = () => {
	const cart = useCartStore((state) => state.cart)
	const placeOrder = useCartStore((state) => state.placeOrder)
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
		<CheckoutLayout
			aside={<CheckoutOverview cart={cart} handlePlaceOrder={handlePlaceOrder} />}
		>
			<DeliveryOptions onChange={(method) => setDeliveryMethod(method)} />
			<AddressForm />
			<PaymentOptions onChange={(method) => setPaymentMethod(method)} />
		</CheckoutLayout>
	)
}

export default CheckoutPage
