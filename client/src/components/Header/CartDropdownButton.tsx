import { MouseEvent, useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { IconButton, Badge } from '@mui/material'

import useCartStore from '../../store/cart'
import { useNavigate } from 'react-router-dom'
import { DropdownContent } from './DropdownContent'

export const CartDropdownButton = () => {
	const [anchorEl, setAnchorEl] = useState(null)
	const cartItems = useCartStore.getState().cart
	const open = Boolean(anchorEl)
	const navigate = useNavigate()

	const handleNavigateToCart = () => {
		setAnchorEl(null)
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
					borderRadius: 1.5,
				}}
				onClick={handleClick}
			>
				<ShoppingCartIcon sx={{ color: 'darkgray' }} />
			</IconButton>

			<DropdownContent
				open={open}
				anchorEl={anchorEl}
				handleNavigateToCart={handleNavigateToCart}
				cartItems={cartItems}
			/>
		</Badge>
	)
}
