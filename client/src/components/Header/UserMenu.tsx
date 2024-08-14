import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import Tooltip from '@mui/material/Tooltip'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'

import { isAuth } from '../../utils/helpers/auth'
import { useLoginModal } from '../../store/helperModal'
import CartButton from './CartButton'

const settings = [
	{ name: 'Начало', path: '/' },
	{ name: 'Профил', path: '/profil' },
	{ name: 'Любими', path: '/favourites' },
]

const UserMenu = ({ anchorElUser, handleOpenUserMenu, handleCloseUserMenu, handleLogout }) => {
	const toggleOpen = useLoginModal((state) => state.toggleOpen)
	return (
		<Box sx={{ flexGrow: 0, mr: 2, gap: 1 }}>
			{isAuth() ? (
				<>
					<Tooltip title='Open settings'>
						<IconButton onClick={handleOpenUserMenu} sx={{ p: 0, mr: 2 }}>
							<Avatar alt='User Avatar' src='/static/images/avatar/2.jpg' />
						</IconButton>
					</Tooltip>

					<CartButton />

					<Menu
						sx={{ mt: '45px' }}
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
					<Button variant='contained' color='secondary' onClick={toggleOpen}>
						Вход
					</Button>
				</Box>
			)}
		</Box>
	)
}

export default UserMenu
