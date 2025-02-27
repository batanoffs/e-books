import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { CheckoutLayout } from '../../components/Layout/checkout/CheckoutLayout'
import { CheckoutOverview } from './CheckoutAsideOverview'
import API from '../../utils/constants/api'
import axios from 'axios'
import useCartStore from '../../store/cart'

// import { DeliveryForm } from './DeliveryForm'
// import { AddressForm } from './AddressForm'
// import { PaymentForm } from './PaymentForm'
// import { DiscountCode } from './DiscountCode'
// import { CommentForOrder } from './CommentForOrder'
// import useCartStore from '../../store/cart'
// import { getToken } from '../../utils/helpers/auth'

// type CheckoutFormValues = {
// 	firstName: string
// 	lastName: string
// 	telephone: number
// 	postcode: string
// 	regionId: number
// 	city: string
// 	address: string
// 	shippingMethod: string
// 	paymentMethod: string
// 	discountCode: string
// 	comment: string
// 	customAttributes: {
// 		deliveryData: string
// 	}
// }

export const CheckoutPage = () => {
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

	// const { errors } = formState // Extract the errors from formState

	const handlePlaceOrder = async () => {
		const products = cart.map((item) => {
			return {
				id: item.product._id,
				quantity: item.quantity,
				productType: item.productType,
			}
		})

		try {
			const response = await axios.post(
				API.CHECKOUT + 'create-checkout-session',
				{ products },
				{
					withCredentials: true,
				}
			)

			if (response.status === 400) return Promise.reject(response)
			if (response.status === 401) return Promise.reject(response)
			if (response.status === 500) return Promise.reject(response)
			if (response.status === 200) return (window.location = response.data.url)
		} catch (error) {
			console.error(error)
		}
	}

	const handleBackToCart = () => {
		navigate('/cart')
	}

	return (
		<CheckoutLayout
			aside={<CheckoutOverview handleBackToCart={handleBackToCart} />}
			onSubmitForm={handleSubmit(handlePlaceOrder)}
		>
			{/* <DeliveryForm errors={errors} control={control} register={register} />
			<AddressForm errors={errors} control={control} register={register} /> */}
			{/* <PaymentForm control={control} errors={errors} /> */}
			{/* <DiscountCode control={control} reset={reset} errors={errors} /> */}
			{/* <CommentForOrder control={control} Controller={Controller} /> */}
		</CheckoutLayout>
	)
}
