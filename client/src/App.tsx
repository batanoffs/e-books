import { Route, Routes, useLocation } from 'react-router-dom'
import { useEffect, useState, useMemo } from 'react'

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
import { ScrollTopButton } from './components/ScrollTop/BackToTopButton'
import WishlistPage from './pages/ProfileSettings/WishlistPage'
import PaymentSuccessful from './pages/checkout/PaymentSuccessful'
import ProfilePage from './pages/ProfileSettings/ProfilePage'
import { HomePage } from './pages/home/HomePage'
import { ThemeProvider, createTheme, useTheme } from '@mui/material/styles'

import * as locales from '@mui/material/locale/'
import themeOptions from './utils/helpers/theme'
import { useLocaleThemeStore } from './components/Header/siteTheme'

type SupportedLocales = keyof typeof locales

const App = () => {
	const [isAdmin, setIsAdmin] = useState(false)
	const [theme, setTheme] = useState(themeOptions)
	const { locale } = useLocaleThemeStore()
	let location = useLocation()
	// const getTheme = useTheme()

	// console.log('getTheme', getTheme)
	// console.log('locale', locale)
	// console.log('theme', theme)

	const themeWithLocale = useMemo(() => createTheme(theme, locales[locale]), [locale, theme])

	// Use useEffect to update the theme when locale changes
	// useEffect(() => {
	// 	setTheme(themeWithLocale) // Update the theme in Zustand store
	// }, [themeWithLocale]) // Update theme only when locale or siteTheme changes

	useEffect(() => {
		let isAdminLocation = location.pathname?.toLowerCase().includes('admin')
		setIsAdmin(isAdminLocation)
	}, [location])

	return (
		<ThemeProvider theme={themeWithLocale}>
			{!isAdmin && <Header />}
			{!isAdmin && <ScrollTopButton />}
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
		</ThemeProvider>
	)
}

export default App
