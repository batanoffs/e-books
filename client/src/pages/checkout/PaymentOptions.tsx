import { locationOptions } from '../../utils/constants/location'

type PaymentOptionsProps = {
	onChange: (method: string) => void
}

const PaymentOptions = ({ onChange }: PaymentOptionsProps) => {
	return (
		<li id='payment' role='presentation' className='checkout-payment-method fc-size-l'>
			<div
				id='checkout-step-payment'
				className='step-content'
				data-role='content'
				role='tabpanel'
				aria-hidden='false'
			>
				<h5> Информация за плащане</h5>
				<form id='co-payment-form' className='form payments' noValidate={true}>
					<input type='hidden' name='form_key' value='HCSMjIwtfKBQbuWI' />
					<fieldset className='fieldset' />
					<legend className='legend'>
						<span>Информация за плащане</span>
					</legend>

					<input
						name='captcha_form_id'
						type='hidden'
						value='payment_processing_request'
						data-scope=''
					/>

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

							<div
								className='field swissup-checkout-fields__field'
								style={{ display: 'none' }}
							>
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

							<div
								className='field swissup-checkout-fields__field'
								style={{ display: 'none' }}
							>
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

							<div
								className='field swissup-checkout-fields__field'
								style={{ display: 'none' }}
							>
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

							<div
								className='field swissup-checkout-fields__field'
								style={{ display: 'none' }}
							>
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

							<div
								className='field swissup-checkout-fields__field'
								style={{ display: 'none' }}
							>
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

					<div id='checkout-payment-method-load' className='opc-payment'>
						<div className='items payment-methods'>
							<div className='payment-group' data-repeat-index='0'>
								<div className='step-title' data-role='title'>
									Метод на плащане
								</div>

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
										<div
											data-role='checkout-messages'
											className='messages'
										></div>

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
													<span
														className='action action-toggle'
														role='heading'
														aria-level={2}
													>
														<span>
															Имате ли коментар към поръчката?
														</span>
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
										<div
											data-role='checkout-messages'
											className='messages'
										></div>

										<div className='payment-method-billing-address'></div>
										<p>
											ЕМАНУИЛ ЕООД
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
													<span
														className='action action-toggle'
														role='heading'
														aria-level={2}
													>
														<span>
															Имате ли коментар към поръчката?
														</span>
													</span>
												</div>
												<div
													className='payment-option-content'
													data-role='content'
													role='tabpanel'
													aria-hidden='false'
												>
													<form className='form form-discount order-comment-form'>
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
													</form>
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

								<div className='payment-method'>
									<div className='payment-method-title field choice fc-dirty'>
										<input
											type='radio'
											name='payment[method]'
											className='radio'
											id='epay'
											value='epay'
										/>
										<label className='label' htmlFor='epay'>
											<span>ePay Bg, EasyPay и B-Pay</span>
										</label>
									</div>
									<div className='payment-method-content'>
										<span>
											Ще бъдете пренасочени към сайта на ePay.bg след като
											завършите поръчката си.
										</span>

										<div
											data-role='checkout-messages'
											className='messages'
										></div>

										<div className='payment-method-billing-address'></div>
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
													<span
														className='action action-toggle'
														role='heading'
														aria-level={2}
													>
														<span>
															Имате ли коментар към поръчката?
														</span>
													</span>
												</div>
												<div
													className='payment-option-content'
													data-role='content'
													role='tabpanel'
													aria-hidden='false'
												>
													<form className='form form-discount order-comment-form'>
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
													</form>
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
								<div className='payment-method'>
									<div className='payment-method-title field choice fc-dirty'>
										<input
											type='radio'
											name='payment[method]'
											className='radio'
											id='dsk'
											value='dsk'
										/>
										<label className='label' htmlFor='dsk'>
											<span>Visa, MasterCard, Дебитна/Кредитна карта</span>
										</label>
									</div>

									<div className='payment-method-content dsk'>
										<div className='payment-method-billing-address'></div>
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
													<span
														className='action action-toggle'
														role='heading'
														aria-level={2}
													>
														<span>
															Имате ли коментар към поръчката?
														</span>
													</span>
												</div>
												<div
													className='payment-option-content'
													data-role='content'
													role='tabpanel'
													aria-hidden='false'
												>
													<form className='form form-discount order-comment-form'>
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
													</form>
												</div>
											</div>
										</div>
										<div className='actions-toolbar'>
											<div className='primary'>
												<button
													className='action primary checkout'
													type='submit'
													disabled={true}
													title='Go to payment form'
												>
													<span>Go to payment form</span>
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='no-quotes-block' style={{ display: 'none' }}>
						<span>Няма възможни методи за плащане.</span>
					</div>

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
										<fieldset
											className='fieldset address'
											data-form='billing-new-address'
										>
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
														{locationOptions.countryOptions.map(
															(option, index) => (
																<option
																	key={index}
																	value={option.value}
																>
																	{option.label}
																</option>
															)
														)}
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
														{locationOptions.regionOptions.map(
															(option, index) => (
																<option
																	key={index}
																	value={option.value}
																>
																	{option.label}
																</option>
															)
														)}
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

					<div
						className='payment-option _collapsible opc-payment-additional discount-code'
						data-collapsible='true'
						role='tablist'
					>
						<div
							className='payment-option-title field choice'
							data-role='title'
							role='tab'
							aria-selected={true}
							aria-expanded='false'
							tabIndex={0}
						>
							<span
								className='action action-toggle'
								id='block-discount-heading'
								role='heading'
								aria-level={2}
							>
								<span>Приложи код за отстъпка</span>
							</span>
						</div>
						<div
							className='payment-option-content'
							data-role='content'
							role='tabpanel'
							aria-hidden='true'
							style={{ display: 'none' }}
						>
							<div data-role='checkout-messages' className='messages'></div>

							<form className='form form-discount' id='discount-form'>
								<div className='payment-option-inner'>
									<div className='field'>
										<label className='label' htmlFor='discount-code'>
											<span>Въведи код за отстъпка</span>
										</label>
										<div className='control'>
											<input
												className='input-text'
												type='text'
												id='discount-code'
												name='discount_code'
												data-validate="{'required-entry':true}"
												aria-placeholder='Въведи код за отстъпка'
											/>
										</div>
									</div>
								</div>
								<div className='actions-toolbar'>
									<div className='primary'>
										<button
											className='action action-apply'
											type='submit'
											value='Приложи отстъпка'
										>
											<span>
												<span>Приложи отстъпка</span>
											</span>
										</button>
									</div>
								</div>

								<input
									name='captcha_form_id'
									type='hidden'
									value='sales_rule_coupon_request'
									data-scope=''
								/>
							</form>
						</div>
					</div>

					<div className='swissup-checkout-orderattachment' style={{ display: 'none' }}>
						<div
							className='payment-option _collapsible opc-payment-additional order-attachments'
							data-collapsible='true'
							role='tablist'
						>
							<div
								className='payment-option-title field choice'
								data-role='title'
								role='tab'
								aria-selected={true}
								aria-expanded='false'
								tabIndex={0}
							>
								<span
									className='action action-toggle'
									id='block-attachments-heading'
									role='heading'
									aria-level={2}
								>
									<span>Attachments</span>
								</span>
							</div>
							<div
								className='payment-option-content'
								data-role='content'
								role='tabpanel'
								aria-hidden='true'
								style={{ display: 'none' }}
							>
								<form
									id='attachment-form'
									className='form form-attachments'
									encType='multipart/form-data'
								>
									<div className='payment-option-inner'>
										<div className='field'>
											<div className='control'>
												<input
													className='input'
													type='file'
													style={{ display: 'none' }}
													id='order-attachment'
													name='order-attachment[]'
													multiple={false}
												/>
												<div
													className='swissup-attachment-drag-area'
													style={{ display: 'none' }}
												>
													<h4>Drag or Select your files here</h4>
												</div>
												<div className='attachment-container'></div>
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</form>
			</div>
		</li>
	)
}

export default PaymentOptions
