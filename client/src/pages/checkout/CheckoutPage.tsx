import { useForm, Controller } from 'react-hook-form'
import {
	Box,
	FormControl,
	FormControlLabel,
	Grid,
	FormLabel,
	Radio,
	RadioGroup,
	Table,
	TableBody,
	TableCell,
	InputLabel,
	MenuItem,
	Select,
	TableHead,
	TableRow,
	Typography,
	Button,
	TextField,
} from '@mui/material'

import { CommentForOrder } from './CommentForOrder'
import { CheckoutLayout } from '../../components/Layout/checkout/CheckoutLayout'
import { CheckoutOverview } from './CheckoutAsideOverview'
import { DiscountCode } from './DiscountCode'
import { InputFormField } from '../../components/InputFormField/InputFormField'
import { paymentOptions, regionOptions, deliveryOptions } from '../../utils/constants/paymentFormConstants'
import { Faktura } from './Faktura'

import useCartStore from '../../store/cart'
import { DeliveryForm } from './DeliveryForm'
import { AddressForm } from './AddressForm'
import { PaymentForm } from './PaymentForm'

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

	const { errors } = formState // Extract the errors from formState

	const handlePlaceOrder = (data: CheckoutFormValues) => {
		console.table(data);
		
		placeOrder({
			id: new Date().toISOString(),
			items: cart,
			paymentMethod: data.paymentMethod,
			deliveryMethod: data.shippingMethod,
		})
	}

	return (
		<CheckoutLayout
			aside={
				<CheckoutOverview cart={cart} handlePlaceOrder={handleSubmit(handlePlaceOrder)} />
			}
		>
			<form onSubmit={handleSubmit(handlePlaceOrder)}>
				<AddressForm errors={errors} control={control} />

				<DeliveryForm errors={errors} control={control} />

				<PaymentForm control={control} errors={errors} />

				<DiscountCode />
				<CommentForOrder control={control} Controller={Controller} />

				<Box mt={3}>
					<Button type='submit' variant='contained' color='primary'>
						Place Order
					</Button>
				</Box>
			</form>
		</CheckoutLayout>
	)
}

export default CheckoutPage
