import useStore from '../../store/cart';

const CartPage = () => {
    const cart = useStore((state) => state.cart);
    const removeFromCart = useStore((state) => state.removeFromCart);
    const updateQuantity = useStore((state) => state.updateQuantity);

    return (
        <div>
            <h1>Shopping Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div>
                    {cart.map((item) => (
                        <div key={item.id}>
                            <h2>{item.title}</h2>
                            <p>Price: {item.price}</p>
                            <input
                                type="number"
                                value={item.quantity}
                                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                            />
                            <button onClick={() => removeFromCart(item.id)}>Remove</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CartPage;
