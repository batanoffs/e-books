import { Route, Routes } from 'react-router-dom'
import ProfileLayout from '../../components/Layout/profile/ProfileLayout'
import { OrdersNav } from './OrdersNav'
import OrdersPage from './OrdersPage'
import WishlistPage from './WishlistPage'
import Settings from './Settings'

const ProfilePage = () => {
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

export default ProfilePage
