import { Link, useNavigate } from 'react-router-dom'
import { Box, IconButton, Menu, MenuItem, Typography, Tooltip, Avatar } from '@mui/material'
import { menuItems } from '../../utils/constants/pages'
import { FormEvent, MouseEvent, useState } from 'react'

import axios from 'axios'
import API from '../../utils/constants/api'
import useAlertStore from '../../store/alert'

export const UserMenu = () => {
	const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)
	const showAlert = useAlertStore((state) => state.showAlert)

	const navigate = useNavigate()

	const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget)
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

	return (
		<Box>
			<Tooltip title='Open settings'>
				<IconButton onClick={handleOpenUserMenu} sx={{ p: 0, mr: 1 }}>
					<Avatar alt='User Avatar' />
				</IconButton>
			</Tooltip>

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
				{menuItems.map((setting) => (
					<MenuItem key={setting.name} component={Link} to={setting.path}>
						<Typography textAlign='center'>{setting.name}</Typography>
					</MenuItem>
				))}
				<MenuItem key='logout' onClick={handleLogout}>
					<Typography textAlign='center'>Изход</Typography>
				</MenuItem>
			</Menu>
		</Box>
	)
}
