import { Route, Routes } from 'react-router-dom'
import { ProfileLayout } from '../../components/index'
import { Settings, WishlistPage, OrdersPage, OrdersNav } from './index'

export const ProfilePage = () => {
	return (
		<ProfileLayout aside={<OrdersNav />}>
			<Routes>
				<Route path='/settings' element={<Settings />} />
				<Route path='/orders' element={<OrdersPage />} />
				<Route path='/wishlist' element={<WishlistPage />} />
			</Routes>
		</ProfileLayout>
	)
}
