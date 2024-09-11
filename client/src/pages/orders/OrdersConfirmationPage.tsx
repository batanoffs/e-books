const OrdersConfirmationPage = ({ products }) => {

	//TODO provide a way to get purchased products

	const totalPrice = products.reduce((product) => product.price * product.quantity, 0)

	return (
		<div className='order-confirmation'>
			<h1>Потвърждение на поръчка</h1>
			<p>
				Благодарим ви за поръчката. Ние сме получили поръчката Ви и ще ви уведомим, когато е
				изпратена.
			</p>

			<div className='order-summary'>
				<h2>Резюме на поръчката</h2>

				<table>
					<thead>
						<tr>
							<th>Артикул</th>
							<th>Количество</th>
							<th>Цена</th>
						</tr>
					</thead>
					<tbody>
						{products.map((product) => (
							<tr>
								<td>{product.title}</td>
								<td>{product.quantity}</td>
								<td>{product.price}</td>
							</tr>
						))}
					</tbody>
					<tfoot>
						<tr>
							<td colSpan={2}>Общо</td>
							<td>{totalPrice} лв.</td>
						</tr>
					</tfoot>
				</table>
			</div>
		</div>
	)
}

export default OrdersConfirmationPage
