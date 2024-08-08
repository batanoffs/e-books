export const Faktura = () => {
	return (
		<div className='fieldset swissup-checkout-fields'>
			<div className='step-title' data-role='title'>
				Допълнителна информация
			</div>
			<div className='fieldset' data-role='content'>
				<div className='field swissup-checkout-fields__field _required fc-field-choice'>
					<label className='label' htmlFor='GVSC71Q'>
						<span></span>
					</label>

					<div className='control'>
						<div className='choice field fc-dirty'>
							<input
								type='checkbox'
								className='checkbox'
								id='GVSC71Q'
								name='swissup_checkout_field[agreements_check]'
								aria-required='true'
								aria-invalid='false'
							/>

							<label className='label' htmlFor='GVSC71Q'>
								Съгласявам се с <a target='_blank'>общите условия.</a> *
							</label>
						</div>
					</div>
				</div>

				<div className='field swissup-checkout-fields__field fc-dirty'>
					<label className='label' htmlFor='PH6XQPU'>
						<span>Желая фактура</span>
					</label>

					<div className='control'>
						<select
							className='select'
							name='swissup_checkout_field[want_invoice]'
							id='PH6XQPU'
							aria-invalid='false'
						>
							<option value=''>Моля изберете</option>
							<option data-title='Да' value='1'>
								Да
							</option>
							<option data-title='Не' value='0' selected={true}>
								Не
							</option>
						</select>
					</div>
				</div>

				<div className='field swissup-checkout-fields__field' style={{ display: 'none' }}>
					<label className='label' htmlFor='VMF4GO2'>
						<span>Фирма</span>
					</label>

					<div className='control'>
						<input
							className='input-text'
							type='text'
							name='swissup_checkout_field[company_name]'
							aria-invalid='false'
							id='VMF4GO2'
						/>
					</div>
				</div>

				<div className='field swissup-checkout-fields__field' style={{ display: 'none' }}>
					<label className='label' htmlFor='WC696Y2'>
						<span>Адрес</span>
					</label>

					<div className='control'>
						<input
							className='input-text'
							type='text'
							name='swissup_checkout_field[company_address]'
							aria-invalid='false'
							id='WC696Y2'
						/>
					</div>
				</div>

				<div className='field swissup-checkout-fields__field' style={{ display: 'none' }}>
					<label className='label' htmlFor='ERAWJA7'>
						<span>ИД. номер по ДДС</span>
					</label>

					<div className='control'>
						<input
							className='input-text'
							type='text'
							name='swissup_checkout_field[company_var_number]'
							aria-invalid='false'
							id='ERAWJA7'
						/>
					</div>
				</div>

				<div className='field swissup-checkout-fields__field' style={{ display: 'none' }}>
					<label className='label' htmlFor='J98RG4B'>
						<span>ЕИК (БУЛСТАТ)</span>
					</label>

					<div className='control'>
						<input
							className='input-text'
							type='text'
							name='swissup_checkout_field[company_eik]'
							aria-invalid='false'
							id='J98RG4B'
						/>
					</div>
				</div>

				<div className='field swissup-checkout-fields__field' style={{ display: 'none' }}>
					<label className='label' htmlFor='CXJ0V3O'>
						<span>МОЛ</span>
					</label>

					<div className='control'>
						<input
							className='input-text'
							type='text'
							name='swissup_checkout_field[company_mol]'
							aria-invalid='false'
							id='CXJ0V3O'
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
