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
import API from '../../utils/constants/api'
// import { getToken } from '../../utils/helpers/auth'

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
				// console.log(url)
			})
			.catch((error) => {
				console.error(error.error)
			})
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
