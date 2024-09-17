import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { CheckoutLayout } from '../../components/Layout/checkout/CheckoutLayout'
import { CheckoutOverview } from './CheckoutAsideOverview'
import { DeliveryForm } from './DeliveryForm'
import { AddressForm } from './AddressForm'
import API from '../../utils/constants/api'
import axios from 'axios'
import useCartStore from '../../store/cart'
import { useEffect } from 'react'

// import { PaymentForm } from './PaymentForm'
// import { DiscountCode } from './DiscountCode'
// import { CommentForOrder } from './CommentForOrder'
// import useCartStore from '../../store/cart'
// import { getToken } from '../../utils/helpers/auth'

type CheckoutFormValues = {
	firstName: string
	lastName: string
	telephone: number
	postcode: string
	regionId: number
	city: string
	address: string
	shippingMethod: string
	paymentMethod: string
	discountCode: string
	comment: string
	customAttributes: {
		deliveryData: string
	}
}
let renderTime = 0

const CheckoutPage = () => {
	// const placeOrder = useCartStore((state) => state.placeOrder)
	const cart = useCartStore((state) => state.cart)

	const { control, handleSubmit, formState, reset, register } = useForm({
		defaultValues: {
			firstName: '',
			lastName: '',
			telephone: '',
			regionId: '',
			city: '',
			address: '',
			shippingMethod: '',
			discountCode: '',
			postcode: '',
			customAttributes: {
				deliveryData: '',
			},
		},
	})

	const navigate = useNavigate()

	const { errors } = formState // Extract the errors from formState

	const handlePlaceOrder = async (input: CheckoutFormValues) => {
		console.table(input)
		console.log('formState', formState)

		// const token = getToken()
		const products = cart.map((item) => {
			return {
				id: item.product._id,
				quantity: item.quantity,
			}
		})
		const data = {
			products,
		}
		try {
			const response = await axios.post(API.CHECKOUT + 'create-checkout-session', data)
			if (response.status === 400) return Promise.reject(response)
			if (response.status === 401) return Promise.reject(response)
			if (response.status === 500) return Promise.reject(response)
			if (response.status === 200) {
				console.log('response', response.data)
				window.location = response.data.url
			}
		} catch (error) {
			console.error(error)
		}

		// fetch(API.CHECKOUT + 'create-checkout-session', {
		// 	method: 'POST',
		// 	headers: {
		// 		'Content-Type': 'application/json',
		// 		// 'Authorization': `Bearer: ${token}`,
		// 	},
		// 	body: JSON.stringify({
		// 		items: [
		// 			{ id: 1, quantity: 1 },
		// 			{ id: 2, quantity: 2 },
		// 		],
		// 	}),
		// })
		// 	.then((res) => {
		// 		if (res.ok) return res.json()
		// 		return res.json().then((json) => Promise.reject(json))
		// 	})
		// 	.then(({ url }) => {
		// 		window.location = url
		// 	})
		// 	.catch((error) => {
		// 		console.error(error.error)
		// 	})
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
			<DeliveryForm errors={errors} control={control} register={register} />
			<AddressForm errors={errors} control={control} register={register} />
			{/* <PaymentForm control={control} errors={errors} /> */}
			{/* <DiscountCode control={control} reset={reset} errors={errors} /> */}
			{/* <CommentForOrder control={control} Controller={Controller} /> */}
		</CheckoutLayout>
	)
}

export default CheckoutPage
