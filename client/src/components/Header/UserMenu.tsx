// UserMenu.tsx
import { Box, IconButton, Menu, MenuItem, Typography, Tooltip, Avatar, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { isAuth } from '../../utils/helpers/auth'
import { useLoginModal } from '../../store/helperModal'

const settings = [
	{ name: 'Начало', path: '/' },
	{ name: 'Профил', path: '/profil' },
	{ name: 'Акаунт', path: '/akaunt' },
]

const UserMenu = ({ anchorElUser, handleOpenUserMenu, handleCloseUserMenu, handleLogout }) => {
	const toggleOpen = useLoginModal((state) => state.toggleOpen)
	return (
		<Box sx={{ flexGrow: 0, mr: 2 }}>
			{isAuth() ? (
				<>
					<Tooltip title='Open settings'>
						<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
							<Avatar alt='User Avatar' src='/static/images/avatar/2.jpg' />
						</IconButton>
					</Tooltip>
					<Menu
						sx={{ mt: '45px', }}
						id='menu-appbar'
						anchorEl={anchorElUser}
						anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
						keepMounted
						transformOrigin={{ vertical: 'top', horizontal: 'right' }}
						open={Boolean(anchorElUser)}
						onClose={handleCloseUserMenu}
					>
						{settings.map((setting) => (
							<MenuItem key={setting.name} component={Link} to={setting.path}>
								<Typography textAlign='center'>{setting.name}</Typography>
							</MenuItem>
						))}
						<MenuItem key='logout' onClick={handleLogout}>
							<Typography textAlign='center'>Изход</Typography>
						</MenuItem>
					</Menu>
				</>
			) : (
				<Box sx={{ display: 'flex', gap: 1 }}>
					<Button variant='contained' color='info' onClick={toggleOpen}>
						Вход
					</Button>
				</Box>
			)}
		</Box>
	)
}

export default UserMenu