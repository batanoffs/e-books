import { useNavigate } from 'react-router-dom'
import { useTheme } from '@mui/material/styles'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import useMediaQuery from '@mui/material/useMediaQuery'
// import Button from '@mui/material/Button'
import Badge from '@mui/material/Badge'

import useCartStore from '../../store/cart'
import { IconButton } from '@mui/material'

const CartButton = () => {
	const navigate = useNavigate()
	// const theme = useTheme()
	// const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))

	const handleNavigateToCart = () => {
		navigate('/cart')
	}

	const cartItemCount = useCartStore((state) => state.cart.length)

	return (
		<Badge badgeContent={cartItemCount} color='secondary'>
			<IconButton
				color='primary'
				size={'large'}
				sx={{ bgcolor: '#eee', '&:hover': { bgcolor: '#ccc' } }}
				onClick={handleNavigateToCart}
			>
				<ShoppingCartIcon />
			</IconButton>

			{/* <Button
				variant='contained'
				color='primary'
				size={'large'}
				startIcon={<ShoppingCartIcon />}
				onClick={handleNavigateToCart}
			></Button> */}
		</Badge>
	)
}

export default CartButton
