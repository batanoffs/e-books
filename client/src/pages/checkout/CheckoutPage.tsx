import { useForm, Controller } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { CommentForOrder } from './CommentForOrder'
import { CheckoutLayout } from '../../components/Layout/checkout/CheckoutLayout'
import { CheckoutOverview } from './CheckoutAsideOverview'
import { DiscountCode } from './DiscountCode'

import { DeliveryForm } from './DeliveryForm'
import { AddressForm } from './AddressForm'
import { PaymentForm } from './PaymentForm'
import useCartStore from '../../store/cart'

type CheckoutFormValues = {
	firstname: string
	lastname: string
	telephone: string
	postcode: string
	region_id: string
	city: string
	street: string
	shippingMethod: string
	paymentMethod: string
	custom_attributes: {
		shiping_delivery_data: string
	}
}

const CheckoutPage = () => {
	const cart = useCartStore((state) => state.cart)
	const placeOrder = useCartStore((state) => state.placeOrder)
	const { control, handleSubmit, formState } = useForm<CheckoutFormValues>({
		defaultValues: {
			shippingMethod: '',
			paymentMethod: '',
		},
	})

	const navigate = useNavigate()

	const { errors } = formState // Extract the errors from formState

	const handlePlaceOrder = (data: CheckoutFormValues) => {
		console.table(data)

		// placeOrder({
		// 	id: new Date().toISOString(),
		// 	items: cart,
		// 	paymentMethod: data.paymentMethod,
		// 	deliveryMethod: data.shippingMethod,
		// })
	}

	const handleBackToCart = () => {
		navigate('/cart')
	}

	return (
		<CheckoutLayout
			aside={
				<CheckoutOverview
					cart={cart}
					handleBackToCart={handleBackToCart}
					handlePlaceOrder={handleSubmit(handlePlaceOrder)}
				/>
			}
		>
			<form onSubmit={handleSubmit(handlePlaceOrder)}>
				<AddressForm errors={errors} control={control} />
				<DeliveryForm errors={errors} control={control} />
				<PaymentForm control={control} errors={errors} />
				<DiscountCode />
				<CommentForOrder control={control} Controller={Controller} />
			</form>
		</CheckoutLayout>
	)
}

export default CheckoutPage
