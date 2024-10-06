import { Route, Routes, useLocation } from 'react-router-dom'
import { useEffect, useState, useMemo } from 'react'

import { Header } from './components/Header/Header'
import Footer from './components/Footer/Footer'
import NotFoundPage from './components/utils/404'
import { ScrollTopButton } from './components/ScrollTop/BackToTopButton'
import {
	HomePage,
	ContactsPage,
	FaqPage,
	LoginModal,
	CartPage,
	Register,
	AdminPage,
	CheckoutPage,
	ProfilePage,
	PaymentSuccessful,
	WishlistPage,
	CatalogPage,
	PopularPage,
	AboutPage,
} from './pages/index'
import { ThemeProvider, createTheme, useTheme } from '@mui/material/styles'

import * as locales from '@mui/material/locale/'
import themeOptions from './utils/helpers/theme'
import { useLocalizationStore } from './store/localization'

type SupportedLocales = keyof typeof locales

const App = () => {
	const [isAdmin, setIsAdmin] = useState(false)
	const [theme, setTheme] = useState(themeOptions)
	const { locale } = useLocalizationStore()
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
