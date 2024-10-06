import { Route, Routes, useLocation } from 'react-router-dom'
import { useEffect, useState, useMemo } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import * as locales from '@mui/material/locale/'
import { useThemeSettings } from './store/themeSettings'
import { themeOptions } from './utils/helpers/theme'
import { Header, Footer, PageNotFound, ScrollTopButton } from './components/index'
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
	CatalogPage,
	PopularPage,
	AboutPage,
} from './pages/index'

type SupportedLocales = keyof typeof locales

const App = () => {
	const [isAdmin, setIsAdmin] = useState(false)
	const { locale, darkMode, toggleDarkMode } = useThemeSettings()
	let location = useLocation()
	useMemo(() => () => toggleDarkMode(), [])

	const mode = themeOptions(darkMode)
	console.log(mode)
	const newTheme = createTheme(mode)

	const myTheme = useMemo(() => createTheme(mode), [mode])

	useEffect(() => {
		let isAdminLocation = location.pathname?.toLowerCase().includes('admin')
		setIsAdmin(isAdminLocation)
	}, [location])

	return (
		<ThemeProvider theme={newTheme}>
			{!isAdmin && <Header />}
			{!isAdmin && <ScrollTopButton />}
			<LoginModal />
			<CssBaseline />
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
				<Route path='*' element={<PageNotFound />} />
				<Route path='/profile/*' element={<ProfilePage />} />
			</Routes>

			{!isAdmin && <Footer />}
		</ThemeProvider>
	)
}

export default App
