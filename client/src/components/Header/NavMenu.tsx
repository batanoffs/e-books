import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import MenuIcon from '@mui/icons-material/Menu'

const pages = ['Най-продавани', 'Книги', 'Учебници', 'Канцелария']

const NavigationMenu = ({
	anchorElNav,
	handleOpenNavMenu,
	handleCloseNavMenu,
	navigationHandler,
}) => {
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
					sx={{ display: { xs: 'block', md: 'none' } }}
				>
					{pages.map((page) => (
						<MenuItem key={page} onClick={() => navigationHandler(page)}>
							<Typography textAlign='center'>{page}</Typography>
						</MenuItem>
					))}
				</Menu>
			</Box>
			<Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1 }}>
				{pages.map((page) => (
					<Button
						key={page}
						onClick={() => navigationHandler(page)}
						variant='text'
						color='inherit'
					>
						{page}
					</Button>
				))}
			</Box>
		</>
	)
}

export default NavigationMenu
