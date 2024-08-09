export const BankTransfer = () => {
	return (
		<div className='payment-method'>
			<div className='payment-method-title field choice fc-dirty'>
				<input
					type='radio'
					name='payment[method]'
					className='radio'
					id='banktransfer'
					value='banktransfer'
				/>
				<label className='label' htmlFor='banktransfer'>
					<span>Банково плащане</span>
				</label>
			</div>

			<div className='payment-method-content'>
				<div data-role='checkout-messages' className='messages'></div>

				<div className='payment-method-billing-address'></div>
				<p>
					книги бг ЕООД
					<br />
					Банка
					<br />
					IBAN:
					<br />
					BIC:
					<br />
					<br />
					За основание посочете номера на Вашата поръчка.
				</p>
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
