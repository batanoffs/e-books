import { useEffect } from 'react'
import axios from 'axios'

import API from '../../utils/constants/api'
import CartLayout from '../../components/Layout/cart/CartLayout'
import CartList from './CartList'
import useCartStore from '../../store/cart'
import CartInfo from './CartInfo'
import authService from '../../services/authService'

const CartPage = () => {
	useEffect(() => {
		const fetchCart = async () => {
			try {
				const userId = await authService.getUserId()
				const response = await axios.get(API.CART + userId)
				if (response.data) {
					useCartStore.setState({ cart: response.data })
				}
			} catch (error) {
				console.error(error)
			}
		}

		fetchCart()
	}, [])

	return (
		<CartLayout header={<h5>Вашата количка</h5>} aside={<CartInfo />}>
			<CartList />
		</CartLayout>
	)
}

export default CartPage
