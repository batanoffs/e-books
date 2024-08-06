export const CheckoutOverview = ({ cart, handlePlaceOrder }) => {
	return (
		<>
			<h5>Обобщение на поръчката</h5>
			<ul>
				{cart.map((product) => (
					<li key={product.id}>
						<h2>{product.title}</h2>
						<p>Price: {product.price}</p>
						<p>Quantity: {product.quantity}</p>
					</li>
				))}
			</ul>

			<button onClick={handlePlaceOrder}>Поръчай</button>
		</>
	)
}
