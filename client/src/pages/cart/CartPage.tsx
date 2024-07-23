import { Box, Button, Paper, Typography } from '@mui/material';
import useCartStore from '../../store/cart';

const CartPage = () => {
    const cart = useCartStore((state) => state.cart);
    const removeFromCart = useCartStore((state) => state.removeFromCart);
    const updateQuantity = useCartStore((state) => state.updateQuantity);

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                height: '90vh',
            }}
        >
            <Paper
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: 2,
                    maxWidth: 600,
                    margin: '0 auto',
                }}
            >
                <Typography variant="h4" component="h1" gutterBottom>
                    Shopping Cart
                </Typography>
                {cart.length === 0 ? (
                    <Typography variant="body1" component="p" align="center">
                        Your cart is empty
                    </Typography>
                ) : (
                    cart.map((item) => (
                        <Box
                            key={item.id}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                margin: 2,
                            }}
                        >
                            <Typography variant="h6" component="h2" gutterBottom>
                                {item.title}
                            </Typography>
                            <Typography variant="body1" component="p">
                                Price: {item.price}
                            </Typography>
                            <input
                                type="number"
                                value={item.quantity}
                                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                                sx={{ margin: 1 }}
                            />
                            <Button variant="contained" onClick={() => removeFromCart(item.id)}>
                                Remove
                            </Button>
                        </Box>
                    ))
                )}
            </Paper>
        </Box>
    );
};

export default CartPage;
