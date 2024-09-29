import { useCallback, useEffect } from 'react'
import axios from 'axios'

import API from '../../utils/constants/api'
import CartLayout from '../../components/Layout/cart/CartLayout'
import CartList from './CartList'
import useCartStore from '../../store/cart'
import CartInfo from './CartInfo'
import authService from '../../services/authService'
import useSpinner from '../../store/spinner'

const CartPage = () => {
	const { hideSpinner, showSpinner } = useSpinner()
	const setCart = useCartStore((state) => state.setCart)

	const fetchUserCart = useCallback(async () => {
		try {
			const userId = await authService.getUserId()
			const response = await axios.get(API.CART + userId)
			setCart(response.data)
		} catch (error) {
			console.error(error)
		} finally {
			toggleLoading()
		}
	}, [])

	useEffect(() => {
		fetchUserCart()
	}, [fetchUserCart])

	return (
		<CartLayout header={<h5>Вашата количка</h5>} aside={<CartInfo />}>
			<CartList />
		</CartLayout>
	)
}

export default CartPage
