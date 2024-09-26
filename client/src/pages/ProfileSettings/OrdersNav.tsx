import ListItem from '@mui/material/ListItem'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import Typography from '@mui/material/Typography'
import { Link } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import authService from '../../services/authService'

export const OrdersNav = () => {
	const navigate = useNavigate()

	const menuItems = [
		{ name: 'Профил', path: 'settings' },
		{ name: 'Харесани', path: 'wishlist' },
		{ name: 'Поръчки', path: 'orders' },
	]

	const navigationHandler = (path: string) => {
		navigate(path)
	}

	const handleLogout = async () => {
		await authService.logout()
		navigate('/')
	}
	return (
		<Box
			sx={{
				width: '100%',
				borderRight: '1px solid #e0e0e0',
				height: '100%',
				minHeight: '80vh',
			}}
		>
			<Typography variant='h6' gutterBottom>
				Акаунт
			</Typography>
			<List>
				{menuItems.map((item) => (
					<ListItem key={item.name}>
						<Link component='button' onClick={() => navigationHandler(item.path)}>
							{item.name}
						</Link>
					</ListItem>
				))}
				<ListItem key='logout'>
					<Link component='button' onClick={handleLogout}>
						Изход
					</Link>
				</ListItem>
			</List>
		</Box>
	)
}
