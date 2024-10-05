import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import MenuIcon from '@mui/icons-material/Menu'
import { navPages } from '../../utils/constants/pages'
import useFiltersStore from '../../store/filters'
import { MouseEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const NavigationMenu = () => {
	const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)
	const setNavCategory = useFiltersStore((state) => state.setNavCategory)
	const navigate = useNavigate()

	const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget)
	}

	const handleCloseNavMenu = () => {
		setAnchorElNav(null)
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
			<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
				<IconButton
					size='large'
					aria-label='account of current user'
					aria-controls='menu-appbar'
					aria-haspopup='true'
					onClick={handleOpenNavMenu}
					color='inherit'
				>
					<MenuIcon />
				</IconButton>
				<Menu
					id='menu-appbar'
					anchorEl={anchorElNav}
					anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
					keepMounted
					transformOrigin={{ vertical: 'top', horizontal: 'left' }}
					open={Boolean(anchorElNav)}
					onClose={handleCloseNavMenu}
				>
					{navPages.map((page) => (
						<MenuItem key={page} onClick={() => navigationHandler(page)}>
							<Typography textAlign='center'>{page}</Typography>
						</MenuItem>
					))}
				</Menu>
			</Box>
			<Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1, gap: 1 }}>
				{navPages.map((page) => (
					<Button
						key={page}
						onClick={() => navigationHandler(page)}
						color='inherit'
						sx={{
							fontWeight: 500,
							fontSize: '0.9em',
							'&:hover': {
								textDecoration: 'none',
								color: 'secondary.main',
								backgroundColor: 'transparent',
							},
						}}
					>
						{page}
					</Button>
				))}
			</Box>
		</>
	)
}

export default NavigationMenu
