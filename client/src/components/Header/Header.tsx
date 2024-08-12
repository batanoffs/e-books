import { useState, MouseEvent, ChangeEvent, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import { AppBar, Container, Toolbar } from '@mui/material'
import { useFiltersStore } from '../../store/filters'
import { API } from '../../utils/constants/api'

import Logo from '../Logo/Logo'
import SearchBar from './SearchBar'
import NavigationMenu from './NavMenu'
import UserMenu from './UserMenu'

const Header = () => {
	const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)
	const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)
	const setNavCategory = useFiltersStore((state) => state.setNavCategory)
	const [searchQuery, setSearchQuery] = useState('')
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

	const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(event.target.value)
	}

	const handleLogout = async (e: FormEvent) => {
		e.preventDefault()
		try {
			await axios.get(API.LOGOUT)
			document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
			navigate('/')
		} catch (error) {
			console.error('Logout failed', error)
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
				<Container maxWidth='lg'>
					<Toolbar variant='dense' sx={{ height: 80 }} disableGutters>
						<Logo />
						<NavigationMenu
							anchorElNav={anchorElNav}
							handleOpenNavMenu={handleOpenNavMenu}
							handleCloseNavMenu={handleCloseNavMenu}
							navigationHandler={navigationHandler}
						/>
						<SearchBar handleSearchInputChange={handleSearchInputChange} />
						<UserMenu
							anchorElUser={anchorElUser}
							handleOpenUserMenu={handleOpenUserMenu}
							handleCloseUserMenu={handleCloseUserMenu}
							handleLogout={handleLogout}
						/>
					</Toolbar>
				</Container>
			</AppBar>
		</>
	)
}

export default Header
