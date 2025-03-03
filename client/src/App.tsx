import { Route, Routes, useLocation } from 'react-router-dom'
import { useEffect, useState, useMemo } from 'react'
import { ThemeProvider, ThemeWithProps, createTheme } from '@mui/material/styles'
import { SnackbarProvider } from 'notistack'

import { HomePage, ContactsPage, FaqPage, LoginModal, CartPage, Register, AdminPage, CheckoutPage, ProfilePage, PaymentSuccessful, CatalogPage, PopularPage, AboutPage } from './pages'
import { Header, Footer, PageNotFound, ScrollTopButton } from './components'
import { useThemeSettings } from './store/themeSettings'
import { themeOptions } from './utils/helpers/theme'

import CssBaseline from '@mui/material/CssBaseline'
        
const App = () => {
	const [isAdmin, setIsAdmin] = useState<boolean>(false)
	const { darkMode, toggleDarkMode } = useThemeSettings()
	let location = useLocation()

	useMemo(() => () => toggleDarkMode(), [])

	const mode = themeOptions(darkMode) as ThemeWithProps
	const myTheme = useMemo(() => createTheme(mode), [mode])

	useEffect(() => {
		let isAdminLocation = location.pathname?.toLowerCase().includes('admin')
		setIsAdmin(isAdminLocation)
	}, [location])

	return (
		<ThemeProvider theme={myTheme}>
			<SnackbarProvider maxSnack={3}>
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
			</SnackbarProvider>
		</ThemeProvider>
	)
}

export default App
