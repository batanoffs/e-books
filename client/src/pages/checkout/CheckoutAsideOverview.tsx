export const CheckoutOverview = ({ cart, handlePlaceOrder }) => {
	return (
		<>
			<h6>Обобщение на поръчката</h6>
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
