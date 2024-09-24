import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import API from '../../utils/constants/api'
import useCartStore from '../../store/cart'

const PaymentSuccessful = () => {
	const [orderData, setOrderData] = useState<any | null>(null)
	const setCart = useCartStore((state) => state.setCart)

	const fetchOrder = useCallback(async (sessionId: string | null) => {
		if (!sessionId) return

		try {
			const response = await axios.get(API.CHECKOUT + 'session-status', {
				params: {
					session_id: sessionId,
				},
			})

			setOrderData(response.data.createdOrder)
		} catch (error) {
			console.log(error)
		}
	}, [])

	useEffect(() => {
		const queryString = window.location.search
		const urlParams = new URLSearchParams(queryString)
		const sessionId = urlParams.get('session_id')

		fetchOrder(sessionId)
	}, [fetchOrder])

	return (
		<section id='success'>
			{orderData && (
				<>
					<h1> Благодарим ви за Вашата поръчка! </h1>
					<p>
						Номер на поръчката: <strong>{orderData.id}</strong>
					</p>
					<ul>
						{orderData?.products?.map((product) => (
							<li key={product.id}>
								<img src={product.picture} alt={product.title} />
								<p>{product.title}</p>
								<p>{product.price}</p>
							</li>
						))}
					</ul>
					<p>
						Ние ценим вашите покупки! Потвърждаващ имейл ще ви бъде изпратен на. Ако имате
						въпроси, моля, свържете се на имейл{' '}
						<a href='mailto:orders@example.com'>orders@example.com</a>.
					</p>
				</>
			)}
		</section>
	)
}

export default PaymentSuccessful

