import React, { useState } from 'react'
import useCartStore from '../../store/cart'

import PaymentOptions from './PaymentOptions'
import { DeliveryOptions } from './DeliveryOptions'
import { CheckoutLayout } from '../../components/Layout/checkout/CheckoutLayout'
import { CheckoutOverview } from './CheckoutAsideOverview'
import { AddressForm } from './AddressForm'
import { useForm } from 'react-hook-form'

const CheckoutPage: React.FC = () => {
	const cart = useCartStore((state) => state.cart)
	const placeOrder = useCartStore((state) => state.placeOrder)
	const [paymentMethod, setPaymentMethod] = useState<string>('')
	const [deliveryMethod, setDeliveryMethod] = useState<string>('')
	const { control, handleSubmit } = useForm()

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
			<DeliveryOptions control={control} onChange={(method) => setDeliveryMethod(method)} />
			<AddressForm control={control} />
			<PaymentOptions control={control} onChange={(method) => setPaymentMethod(method)} />
		</CheckoutLayout>
	)
}

export default CheckoutPage
