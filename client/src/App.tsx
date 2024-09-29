import { Route, Routes, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

import useSpinner from './store/spinner'
import Spinner from './components/utils/Spinner'
import LoginModal from './pages/login/LoginModal'
import Register from './pages/register/RegisterPage'
import AdminPage from './pages/ReactAdmin/Admin'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import NotFoundPage from './components/utils/404'
import CartPage from './pages/cart/CartPage'
import CheckoutPage from './pages/checkout/CheckoutPage'
import FaqPage from './pages/faq/FaqPage'
import ContactsPage from './pages/contacts/ContactsPage'
import AboutPage from './pages/about/AboutPage'
import PopularPage from './pages/popular/PopularPage'
import CatalogPage from './pages/catalogue/CatalogPage'
import ScrollTop from './components/ScrollTop/BackToTop'
import WishlistPage from './pages/ProfileSettings/WishlistPage'
import PaymentSuccessful from './pages/checkout/PaymentSuccessful'
import ProfilePage from './pages/ProfileSettings/ProfilePage'
import { HomePage } from './pages/home/HomePage'

const App = () => {
	const [isAdmin, setIsAdmin] = useState(false)
	const { isLoading } = useSpinner()
	let location = useLocation()

	useEffect(() => {
		let isAdminLocation = location.pathname?.toLowerCase().includes('admin')
		setIsAdmin(isAdminLocation)
	}, [location])

	return (
		<>
			{!isAdmin && <Header />}
			{!isAdmin && <ScrollTop />}
			{isLoading && <Spinner />}
			<LoginModal />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/catalog/*' element={<CatalogPage />} />
				<Route path='/admin/*' element={<AdminPage />} />
				<Route path='/cart' element={<CartPage />} />
				<Route path='/checkout' element={<CheckoutPage />} />
				<Route path='/success' element={<PaymentSuccessful />} />
				<Route path='/contacts' element={<ContactsPage />} />
				<Route path='/popular' element={<PopularPage />} />
				<Route path='/about' element={<AboutPage />} />
				<Route path='/faq' element={<FaqPage />} />
				<Route path='/register' element={<Register />} />
				<Route path='*' element={<NotFoundPage />} />
				<Route path='/profile/*' element={<ProfilePage />} />
				<Route path='/wishlist' element={<WishlistPage />} />
			</Routes>

			{!isAdmin && <Footer />}
		</>
	)
}

export default App
