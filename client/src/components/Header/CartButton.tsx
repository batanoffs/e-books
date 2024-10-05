import { MouseEvent, useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { IconButton, Badge, Typography, Popper, Paper, Button, ListItem } from '@mui/material'

import useCartStore from '../../store/cart'
import { useNavigate } from 'react-router-dom'
import { ProductsTable } from '../Tables/ProductsTable'

export const CartDropdown = () => {
	const [anchorEl, setAnchorEl] = useState(null)
	const cartItems = useCartStore.getState().cart
	const open = Boolean(anchorEl)
	const navigate = useNavigate()

	//TODO update items display and fix issues
	const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)

	const handleNavigateToCart = () => {
		navigate('/cart')
	}

	const handleClick = (event: MouseEvent) => {
		setAnchorEl(anchorEl ? null : event.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	return (
		<Badge badgeContent={cartItems.length} color='secondary'>
			<IconButton
				color='primary'
				size={'large'}
				sx={{
					'&:hover': { bgcolor: '#eee' },
					m: 0,
					py: 0.7,
					minWidth: '60px',
					border: '1px solid darkgray',
					borderRadius: 0.5,
				}}
				// onClick={handleNavigateToCart}
				onClick={handleClick}
			>
				<ShoppingCartIcon sx={{ color: 'darkgray' }} />
			</IconButton>

			<Popper
				open={open}
				anchorEl={anchorEl}
				transition
				disablePortal
				placement='top-end'
				style={{
					height: 'auto',
					width: '200px',
					position: 'absolute',
					top: 50,
					zIndex: 5,
				}}
			>
				<Paper
					sx={{
						padding: '0.5em',
						borderRadius: '0.5em',
						minWidth: '150px',
						marginBottom: '0.5em',
						visibility: 'visible',
					}}
				>
					{' '}
					<Typography variant='body2' sx={{ fontWeight: 'bold', textAlign: 'center' }}>
						Количка
					</Typography>
					{cartItems.length > 0 ? (
						<ProductsTable products={cartItems} />
					) : (
						<ListItem>Вашата количка е празна</ListItem>
					)}
					<Button
						variant='contained'
						sx={{ width: '100%' }}
						onClick={handleNavigateToCart}
					>
						Към количката
					</Button>
				</Paper>
			</Popper>
		</Badge>
	)
}
