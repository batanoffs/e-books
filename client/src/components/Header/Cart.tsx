import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery, Button, Badge } from '@mui/material';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import useCartStore from '../../store/cart';

const CartButton = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleClick = () => {
        navigate('/cart');
    };

    return (
        <Button
            variant="contained"
            color="primary"
            size={isSmallScreen ? 'small' : 'large'}
            startIcon={<ShoppingCart />}
            onClick={handleClick}
            className="cart-button"
        >
            <Badge badgeContent={getCartItemCount()} color="error" />
        </Button>
    );
};

const getCartItemCount = () => {
    const cart = useCartStore((state) => state.cart);
    return cart.length;
};

export default CartButton;
