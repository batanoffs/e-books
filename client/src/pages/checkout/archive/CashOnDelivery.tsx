export const CashOnDelivery = () => {
	return (
		<div className='payment-method'>
			<div className='payment-method-title field choice fc-dirty'>
				<input
					type='radio'
					name='payment[method]'
					className='radio'
					id='cashondelivery'
					value='cashondelivery'
				/>
				<label className='label' htmlFor='cashondelivery'>
					<span>Наложен платеж</span>
				</label>
			</div>

			<div className='payment-method-content'>
				<div data-role='checkout-messages' className='messages'></div>

				<div className='payment-method-billing-address'></div>
				<p></p>
				<div className='checkout-agreements-block'>
					<div data-role='checkout-agreements'>
						<div
							className='checkout-agreements fieldset'
							style={{ display: 'none' }}
						></div>
					</div>
				</div>
			</div>
		</div>
	)
}
