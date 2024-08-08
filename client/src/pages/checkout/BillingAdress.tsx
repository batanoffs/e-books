
import { locationOptions } from '../../utils/constants/location'

export const BillingAddress = () => {
	return (
		<div className='checkout-billing-address'>
			<div className='step-title'>Адрес за фактуриране</div>
			<div className='billing-address-same-as-shipping-block field choice fc-dirty'>
				<input
					type='checkbox'
					name='billing-address-same-as-shipping'
					id='billing-address-same-as-shipping-shared'
					checked={true}
				/>
				<label htmlFor='billing-address-same-as-shipping-shared'>
					<span>Моите адреси за фактуриране и доставка са еднакви</span>
				</label>
			</div>

			<div className='billing-address-details' style={{ display: 'none' }}>
				<span className='afm-br afm-hidden' style={{ display: 'none' }}>
					<br />
				</span>
				<span className='afm-br afm-hidden' style={{ display: 'none' }}>
					<br />
				</span>
				, <span></span>
				<br />
				<span className='afm-br afm-hidden' style={{ display: 'none' }}>
					<br />
				</span>
				<span className='afm-br afm-hidden' style={{ display: 'none' }}>
					<br />
				</span>
				<div style={{ display: 'none' }}>
					<br />

					<br />

					<br />
				</div>
				<button
					type='button'
					className='action action-edit-address'
					style={{ display: 'none' }}
				>
					<span>Редактирай</span>
				</button>
			</div>

			<fieldset className='fieldset' style={{ display: 'none' }}>
				<div className='field field-select-billing'>
					<label className='label'>
						<span>Адрес за фактуриране</span>
					</label>
					<div className='control'></div>
				</div>

				<div>
					<div className='billing-address-form' style={{ display: 'none' }}>
						<form data-hasrequired='* Задължителни полета'>
							<fieldset className='fieldset address' data-form='billing-new-address'>
								<div className='field _required'>
									<label className='label' htmlFor='POO5IQI'>
										<span>Име</span>
									</label>

									<div className='control'>
										<input
											className='input-text'
											type='text'
											name='firstname'
											aria-required='true'
											aria-invalid='false'
											id='POO5IQI'
											aria-placeholder='Име *'
										/>
									</div>
								</div>

								<div className='field _required'>
									<label className='label' htmlFor='VOH3FKH'>
										<span>Фамилия</span>
									</label>

									<div className='control'>
										<input
											className='input-text'
											type='text'
											name='lastname'
											aria-required='true'
											aria-invalid='false'
											id='VOH3FKH'
											aria-placeholder='Фамилия *'
										/>
									</div>
								</div>

								<div className='field _required'>
									<label className='label' htmlFor='YGMFFYD'>
										<span>Телефон</span>
									</label>

									<div className='control _with-tooltip'>
										<input
											className='input-text'
											type='text'
											name='telephone'
											aria-required='true'
											aria-invalid='false'
											id='YGMFFYD'
											aria-placeholder='Телефон *'
										/>

										<div className='field-tooltip toggle'>
											<span id='tooltip-label' className='label'>
												<span>Tooltip</span>
											</span>
											<span
												id='tooltip'
												className='field-tooltip-action action-help'
												tabIndex={0}
												data-toggle='dropdown'
												aria-labelledby='tooltip-label'
												aria-haspopup='true'
												aria-expanded='false'
												role='button'
											></span>

											<div
												className='field-tooltip-content'
												data-target='dropdown'
												aria-hidden='true'
											>
												Въпроси за доставка.
											</div>
										</div>
									</div>
								</div>

								<fieldset className='field street admin__control-fields'>
									<legend className='label'>
										<span>Адрес</span>
									</legend>
									<div className='control'>
										<div className='field'>
											<label className='label' htmlFor='VA1XBCT'>
												<span>Адрес: Line 1</span>
											</label>

											<div className='control'>
												<input
													className='input-text'
													type='text'
													name='street[0]'
													aria-invalid='false'
													id='VA1XBCT'
													aria-placeholder='Адрес: Line 1'
												/>
											</div>
										</div>

										<div className='field additional'>
											<label className='label' htmlFor='AQPSD91'>
												<span>Адрес: Line 2</span>
											</label>

											<div className='control'>
												<input
													className='input-text'
													type='text'
													name='street[1]'
													aria-invalid='false'
													id='AQPSD91'
													aria-placeholder='Адрес: Line 2'
												/>
											</div>
										</div>

										<div className='field additional'>
											<label className='label' htmlFor='H6FCIXO'>
												<span>Адрес: Line 3</span>
											</label>

											<div className='control'>
												<input
													className='input-text'
													type='text'
													name='street[2]'
													aria-invalid='false'
													id='H6FCIXO'
													aria-placeholder='Адрес: Line 3'
												/>
											</div>
										</div>
									</div>
								</fieldset>

								<div className='field _required fc-dirty'>
									<label className='label' htmlFor='MBI35BK'>
										<span>Държава</span>
									</label>

									<div className='control'>
										<select
											className='select'
											name='country_id'
											id='MBI35BK'
											aria-required='true'
											aria-invalid='false'
											aria-aria-placeholder='Държава *'
										>
											<option value=''>Моля изберете</option>
											<option
												data-title='България'
												value='BG'
												selected={true}
											>
												България
											</option>
											<option
												data-title='──────────'
												value='delimiter'
												disabled={true}
											>
												──────────
											</option>
											{locationOptions.countryOptions.map((option, index) => (
												<option key={index} value={option.value}>
													{option.label}
												</option>
											))}
										</select>
									</div>
								</div>

								<div className='field fc-dirty'>
									<label className='label' htmlFor='QV528RF'>
										<span>Област / Провинция</span>
									</label>

									<div className='control'>
										<select
											className='select'
											name='region_id'
											id='QV528RF'
											aria-invalid='false'
											aria-placeholder='Област / Провинция'
										>
											<option value='' selected={true}>
												Моля изберете регион.
											</option>
											{locationOptions.regionOptions.map((option, index) => (
												<option key={index} value={option.value}>
													{option.label}
												</option>
											))}
										</select>
									</div>
								</div>

								<div className='field' style={{ display: 'none' }}>
									<label className='label' htmlFor='QAWBBIP'>
										<span>Област / Провинция</span>
									</label>

									<div className='control'>
										<input
											className='input-text'
											type='text'
											name='region'
											aria-invalid='false'
											id='QAWBBIP'
											aria-placeholder='Област / Провинция'
										/>
									</div>
								</div>

								<div className='field _required'>
									<label className='label' htmlFor='FF9N9G8'>
										<span>Населено място</span>
									</label>

									<div className='control'>
										<input
											className='input-text'
											type='text'
											name='city'
											aria-required='true'
											aria-invalid='false'
											id='FF9N9G8'
											aria-placeholder='Населено място *'
										/>
									</div>
								</div>

								<div className='field _required'>
									<label className='label' htmlFor='BV1NTNI'>
										<span>Пощенски код</span>
									</label>

									<div className='control'>
										<input
											className='input-text'
											type='text'
											name='postcode'
											aria-required='true'
											aria-invalid='false'
											id='BV1NTNI'
											aria-placeholder='Пощенски код *'
										/>
									</div>
								</div>
								<div className='field'>
									<label className='label' htmlFor='IQSBU6A'>
										<span>Shipping delivery data</span>
									</label>

									<div className='control'>
										<textarea
											className='admin__control-textarea'
											name='custom_attributes[shiping_delivery_data]'
											cols={15}
											rows={2}
											aria-describedby='notice-IQSBU6A'
											id='IQSBU6A'
											aria-placeholder='Shipping delivery data'
										></textarea>
									</div>
								</div>
								<div className='field'>
									<label className='label' htmlFor='JMV3M8W'>
										<span>Shipping delivery method data</span>
									</label>

									<div className='control'>
										<input
											className='input-text'
											type='text'
											name='custom_attributes[shipping_delivery_method_data]'
											aria-invalid='false'
											id='JMV3M8W'
											aria-placeholder='Shipping delivery method data'
										/>
									</div>
								</div>
							</fieldset>
						</form>
					</div>
				</div>

				<div className='actions-toolbar'>
					<div className='primary'>
						<button className='action action-update' type='button'>
							<span></span>
						</button>
						<button className='action action-cancel' type='button'>
							<span></span>
						</button>
					</div>
				</div>
			</fieldset>
		</div>
	)
}
