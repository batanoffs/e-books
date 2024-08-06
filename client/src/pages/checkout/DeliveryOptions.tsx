export const DeliveryOptions = () => {
	return (
		<li id='shipping-method' className='' role='presentation'>
			<div className=''>
				<h5>Начин на доставка</h5>

				<div className='' style={{ display: 'none' }}>
					<span
						className=''
						tabIndex={0}
						data-toggle='dropdown'
						aria-haspopup='true'
						aria-expanded='false'
						role='button'
					>
						<span>Вижте нашите политики за доставка</span>
					</span>
					<div className='' data-target='dropdown' aria-hidden='true'>
						<span></span>
					</div>
				</div>

				<div
					id='checkout-step-shipping-method'
					className=''
					data-role='content'
					role='tabpanel'
					aria-hidden='false'
				>
					<form id='shipping-method-form' className='' noValidate={true}>
						<div id='checkout-shipping-method-load'>
							<table className=''>
								<thead>
									<tr className=''>
										<th className=''>{'  '}</th>
										<th className=''>Цена</th>
										<th className=''>Доставчик</th>
										<th className=''>Метод</th>
									</tr>
								</thead>
								<tbody>
									<tr className=''>
										<td className=''>
											<input
												type='radio'
												className=''
												aria-labelledby='label_method_boxnow label_carrier_boxnow'
												value='boxnow'
												name='ko_unique_1'
											/>
										</td>
										<td className=''>
											<span className=''>
												<span className=''>3.99 лв.</span>
											</span>
										</td>
										<td className='' id='label_method_boxnow'>
											BoxNow
										</td>
										<td className='' id='label_method_boxnow'>
											BoxNow
										</td>
										<td className='' id='label_carrier_boxnow'></td>
									</tr>

									<tr className=''>
										<td className=''>
											<input
												type='radio'
												className=''
												aria-labelledby='label_method_econt_office_econt label_carrier_econt_office_econt'
												value='econt_econt_office'
												name='ko_unique_2'
											/>
										</td>
										<td className=''>
											<span className=''>
												<span className=''>5.99 лв.</span>
											</span>
										</td>
										<td className='' id='label_method_econt_office_econt'>
											Econt Express - в офис или EcontATM 24/7
										</td>
										<td className='' id='label_carrier_econt_office_econt'>
											Econt Express
										</td>
									</tr>

									<tr className=''>
										<td className=''>
											<input
												type='radio'
												className=''
												aria-labelledby='label_method_speedy_505 label_carrier_speedy_505'
												value='speedy_speedy_505'
												name='ko_unique_3'
											/>
										</td>
										<td className=''>
											<span className=''>
												<span className=''>5.99 лв.</span>
											</span>
										</td>
										<td className='' id='label_method_speedy_505'>
											Speedy
										</td>
										<td className='' id='label_carrier_speedy_505'>
											Speedy
										</td>
									</tr>
								</tbody>
							</table>
						</div>

						<div id='onepage-checkout-shipping-method-additional-load'></div>

						<div className='' id='shipping-method-buttons-container'>
							<div className=''>
								<button data-role='opc-continue' type='submit' className=''>
									Продължи
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</li>
	)
}
