import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { CheckoutLayout } from '../../components/Layout/checkout/CheckoutLayout'
import { CheckoutOverview } from './CheckoutAsideOverview'
import { DeliveryForm } from './DeliveryForm'
import { AddressForm } from './AddressForm'
import API from '../../utils/constants/api'

// import { PaymentForm } from './PaymentForm'
// import { DiscountCode } from './DiscountCode'
// import { CommentForOrder } from './CommentForOrder'
// import useCartStore from '../../store/cart'
// import { getToken } from '../../utils/helpers/auth'

type CheckoutFormValues = {
	firstName: string
	lastName: string
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
let renderTime = 0

const CheckoutPage = () => {
	// const placeOrder = useCartStore((state) => state.placeOrder)
	const { control, handleSubmit, formState, reset, register } = useForm<CheckoutFormValues>({
		defaultValues: {
			firstName: '',
			lastName: '',
			telephone: '',
			region_id: '',
			city: '',
			street: '',
			shippingMethod: '',
			paymentMethod: '',
			discountCode: '',
			comment: '',
			postcode: '',
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
		// const token = getToken()
		fetch(API.CHECKOUT + 'create-checkout-session', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				// 'Authorization': `Bearer: ${token}`,
			},
			body: JSON.stringify({
				items: [
					{ id: 1, quantity: 1 },
					{ id: 2, quantity: 2 },
				],
			}),
		})
			.then((res) => {
				if (res.ok) return res.json()
				return res.json().then((json) => Promise.reject(json))
			})
			.then(({ url }) => {
				window.location = url
			})
			.catch((error) => {
				console.error(error.error)
			})
	}

	const handleBackToCart = () => {
		navigate('/cart')
	}
	renderTime++
	return (
		<CheckoutLayout
			aside={<CheckoutOverview handleBackToCart={handleBackToCart} renderTime={renderTime} />}
			onSubmitForm={handleSubmit(handlePlaceOrder)}
			control={control}
		>
			<DeliveryForm errors={errors} control={control} />
			<AddressForm errors={errors} control={control} register={register} />
			{/* <PaymentForm control={control} errors={errors} /> */}
			{/* <DiscountCode control={control} reset={reset} errors={errors} /> */}
			{/* <CommentForOrder control={control} Controller={Controller} /> */}
		</CheckoutLayout>
	)
}

export default CheckoutPage
