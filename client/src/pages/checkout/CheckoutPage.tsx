import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { CheckoutLayout } from '../../components/Layout/checkout/CheckoutLayout'
import { CheckoutOverview } from './CheckoutAsideOverview'
import { CommentForOrder } from './CommentForOrder'
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
	discountCode: string
	comment: string
	custom_attributes: {
		shiping_delivery_data: string
	}
}

const CheckoutPage = () => {
	// const placeOrder = useCartStore((state) => state.placeOrder)
	const { control, handleSubmit, formState, reset } = useForm<CheckoutFormValues>({
		defaultValues: {
			shippingMethod: '',
			paymentMethod: '',
			discountCode: '',
			comment: '',
			firstname: '',
			lastname: '',
			telephone: '',
			postcode: '',
			region_id: '',
			city: '',
			street: '',
			custom_attributes: {
				shiping_delivery_data: '',
			},
		},
	})

	const navigate = useNavigate()

	const { errors } = formState // Extract the errors from formState

	const handlePlaceOrder = (data: CheckoutFormValues) => {
		console.table(data)
		console.log('formState', formState)

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
			aside={<CheckoutOverview handleBackToCart={handleBackToCart} />}
			onSubmitForm={handleSubmit(handlePlaceOrder)}
		>
			<AddressForm errors={errors} control={control} />
			<DeliveryForm errors={errors} control={control} />
			<PaymentForm control={control} errors={errors} />
			{/* <DiscountCode control={control} reset={reset} errors={errors} /> */}
			{/* <CommentForOrder control={control} Controller={Controller} /> */}
		</CheckoutLayout>
	)
}

export default CheckoutPage
