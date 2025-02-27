import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { Box, IconButton, Menu, MenuItem, Typography, Tooltip, Avatar } from '@mui/material'

import { profileMenuItems } from '../../utils/constants/pages'
import { FormEvent, MouseEvent, useState } from 'react'
import { useAlert } from '../../hooks/useAlert'
import API from '../../utils/constants/api'

export const UserMenu = () => {
	const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)
	const { showAlert } = useAlert()
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
					<Avatar
						sx={{ width: 32, height: 32, backgroundColor: 'primary.main' }}
						alt='User Avatar'
					/>
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
				{profileMenuItems.map((item) => (
					<MenuItem key={item.title} component={Link} to={item.href}>
						<Typography color='text.secondary' textAlign='center'>{item.title}</Typography>
					</MenuItem>
				))}
				<MenuItem key='logout' onClick={handleLogout}>
					<Typography color='text.secondary' textAlign='center'>Изход</Typography>
				</MenuItem>
			</Menu>
		</Box>
	)
}
