import { Navigate } from 'react-router-dom'
import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import API from '../../utils/constants/api'
import authService from '../../services/authService'

//TODO update customer email with actual email of the user
const PaymentSuccessful = () => {
	const [status, setStatus] = useState(null)
	const [customerEmail, setCustomerEmail] = useState('')

	const createOrder = useCallback(async () => {
		const queryString = window.location.search
		const urlParams = new URLSearchParams(queryString)
		const sessionId = urlParams.get('session_id')
		console.log('sessionId', sessionId)
		console.log('queryString', queryString)

		try {
			const userId = await authService.getUserId()
			console.log('userId', userId)
			const response = await axios.get(API.CHECKOUT + 'session-status', {
				params: {
					session_id: sessionId,
				},
			})

			console.log('response', response.data)

			// const data = await response.data
			// console.log('data', data)
			// const createOrder = await axios.post(API.CHECKOUT + 'create-order', {
			// 	userId,
			// 	products: response.data.products,
			// 	total: response.data.total,
			// 	status: response.data.status,
			// })
			// console.log('createOrder', createOrder)
			// setStatus(data.status)
			// setCustomerEmail(data.customer_email)
		} catch (error) {
			console.log(error)
		}
	}, [])

	useEffect(() => {
		createOrder()
	}, [createOrder])

	if (status === 'open') {
		return <Navigate to='/checkout' />
	}

	if (status === 'complete') {
		return (
			<section id='success'>
				<p>
					Ние ценим вашите покупки! Потвърждаващ имейл ще ви бъде изпратен на{' '}
					{customerEmail}. Ако имате въпроси, моля, свържете се на имейл{' '}
					<a href='mailto:orders@example.com'>orders@example.com</a>.
				</p>
			</section>
		)
	}

	return null
}

export default PaymentSuccessful
