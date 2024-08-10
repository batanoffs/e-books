import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery, Button, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import useCartStore from '../../store/cart';

const CartButton = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleNavigateToCart = () => {
        navigate('/cart');
    };

    const cartItemCount = useCartStore((state) => state.cart.length);

    return (
        <Badge badgeContent={cartItemCount} color="secondary">
            <Button
                variant="contained"
                color="primary"
                size={isSmallScreen ? 'small' : 'large'}
                startIcon={<ShoppingCartIcon />}
                onClick={handleNavigateToCart}
            ></Button>
        </Badge>
    );
};

export default CartButton;
