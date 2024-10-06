import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import MenuIcon from '@mui/icons-material/Menu'
import { navPages } from '../../utils/constants/pages'
import useFiltersStore from '../../store/filters'
import { MouseEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { List, ListItemButton } from '@mui/material'

export const NavMenu = () => {
	const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)
	const setNavCategory = useFiltersStore((state) => state.setNavCategory)
	const navigate = useNavigate()

	const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget)
	}

	const handleCloseNavMenu = () => {
		setAnchorElNav(null)
	}

	const navigationHandler = (page: { title: string; href: string }) => {
		setNavCategory('')
		navigate(page.href)
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
						<MenuItem key={page.title} onClick={() => navigationHandler(page)}>
							<Typography textAlign='center'>{page.title}</Typography>
						</MenuItem>
					))}
				</Menu>
			</Box>
			<List
				sx={{
					display: { xs: 'none', md: 'flex' },
					'& > :last-child': {
						textAlign: 'right',
						flex: 1.5,
					},
					flexGrow: 1,
					paddingTop: 0,
					paddingBottom: 0,
				}}
			>
				{navPages.map((page) => (
					<ListItemButton
						key={page.title}
						onClick={() => navigationHandler(page)}
						sx={{
							color: 'white',
							fontWeight: 600,
							fontSize: '1em',
							'&:hover': {
								textDecoration: 'none',
								color: 'secondary.main',
								backgroundColor: 'transparent',
							},
						}}
					>
						{page.title}
					</ListItemButton>
				))}
			</List>
		</>
	)
}
