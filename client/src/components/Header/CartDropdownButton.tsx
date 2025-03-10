import { MouseEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { IconButton, Badge, ClickAwayListener } from '@mui/material'

import useCartStore from '../../store/cart'
import { DropdownContent } from './DropdownContent'

export const CartDropdownButton = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const cartItems = useCartStore.getState().cart
  const open = Boolean(anchorEl)
  const navigate = useNavigate()

  const handleNavigateToCart = () => {
    setAnchorEl(null)
    navigate('/cart')
  }

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget)
  }

  const handleClickAway = () => {
    setAnchorEl(null)
  }

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div>
        <Badge badgeContent={cartItems.length} color='secondary'>
          <IconButton
            size='large'
            sx={{
              m: 0,
              py: 0.7,
              minWidth: '60px',
              border: '1px solid',
              borderColor: 'primary.main',
              borderRadius: 1.5,
            }}
            onClick={handleClick}
          >
            <ShoppingCartIcon color='primary' sx={{ borderColor: 'primary.main' }} />
          </IconButton>
        </Badge>

        <DropdownContent
          open={open}
          anchorEl={anchorEl}
          handleNavigateToCart={handleNavigateToCart}
          cartItems={cartItems}
        />
      </div>
    </ClickAwayListener>
  )
}
