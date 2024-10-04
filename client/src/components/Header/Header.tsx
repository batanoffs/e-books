import { useState, MouseEvent, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import AppBar from '@mui/material/AppBar'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'

import useFiltersStore from '../../store/filters'
import useAlertStore from '../../store/alert'
import API from '../../utils/constants/api'
import Logo from '../Logo/Logo'
import SearchBar from './SearchBar'
import NavigationMenu from './NavMenu'
import UserMenu from './UserMenu'
import { LocaleSwitcher } from './LocaleSwitcher'
import { Box } from '@mui/material'

const Header = () => {
	const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)
	const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)
	const setNavCategory = useFiltersStore((state) => state.setNavCategory)
	const showAlert = useAlertStore((state) => state.showAlert)
	const navigate = useNavigate()

	const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget)
	}

	const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget)
	}

	const handleCloseNavMenu = () => {
		setAnchorElNav(null)
	}

	const handleCloseUserMenu = () => {
		setAnchorElUser(null)
	}

	const handleLogout = async (e: FormEvent) => {
		e.preventDefault()
		handleCloseUserMenu()

		try {
			const response = await axios.get(API.LOGOUT)
			const { redirectUrl } = response.data
			document.cookie = 'token=; expires=; path=/;'
			navigate(redirectUrl)
		} catch (error) {
			showAlert('Възникна грешка!', 'error')
		}
	}

	const navigationHandler = (page: string) => {
		switch (page) {
			case 'Книги':
				setNavCategory('all')
				navigate('/catalog/books/all')
				break
			case 'Учебници':
				setNavCategory('all')
				navigate('/catalog/textbooks/all')
				break
			case 'Канцелария':
				setNavCategory('all')
				navigate('/catalog/stationery/all')
				break
			case 'Най-продавани':
				navigate('/catalog/popular')
				break
			case 'Контакти':
				navigate('/contacts')
				break

			default:
				navigate('/')
				break
		}
	}

	return (
		<>
			<AppBar position='static'>
				<Container maxWidth='xl'>
					<Toolbar variant='dense' sx={{ height: 80, justifyContent: 'space-between' }}>
						<Logo />
						<Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
							<SearchBar />
							<LocaleSwitcher />
							<UserMenu
								anchorElUser={anchorElUser}
								handleOpenUserMenu={handleOpenUserMenu}
								handleCloseUserMenu={handleCloseUserMenu}
								handleLogout={handleLogout}
							/>
						</Box>
					</Toolbar>
					<Toolbar variant='dense' sx={{ justifyContent: 'center' }}>
						<NavigationMenu
							anchorElNav={anchorElNav}
							handleOpenNavMenu={handleOpenNavMenu}
							handleCloseNavMenu={handleCloseNavMenu}
							navigationHandler={navigationHandler}
						/>
					</Toolbar>
				</Container>
			</AppBar>
		</>
	)
}

export default Header
