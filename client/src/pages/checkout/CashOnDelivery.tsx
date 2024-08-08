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

					<div
						className='payment-option _collapsible opc-payment-additional comment last _active'
						data-collapsible='true'
						role='tablist'
					>
						<div
							className='payment-option-title field choice'
							data-role='title'
							role='tab'
							aria-selected={true}
							aria-expanded='true'
							tabIndex={0}
						>
							<span className='action action-toggle' role='heading' aria-level={2}>
								<span>Имате ли коментар към поръчката?</span>
							</span>
						</div>
						<div
							className='payment-option-content'
							data-role='content'
							role='tabpanel'
							aria-hidden='false'
						>
							<div className='payment-option-inner'>
								<div className='field'>
									<div className='control'>
										<textarea
											className='input-text order-comment order-comment-input'
											name='comment-code'
											rows={4}
											aria-placeholder='Въведете вашият коментар'
										></textarea>
										<p></p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='actions-toolbar'>
					<div className='primary'>
						<button
							className='action primary checkout'
							type='submit'
							disabled={true}
							title='Направи поръчка'
						>
							<span>Направи поръчка</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
