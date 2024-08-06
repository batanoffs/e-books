import { useState } from 'react'
import { locationOptions } from '../../utils/constants/regions'

const Tooltip = ({ content }) => (
	<div className='field-tooltip toggle'>
		<span className='label'>
			<span>Tooltip</span>
		</span>
		<span
			className='field-tooltip-action action-help'
			tabIndex={0}
			data-toggle='dropdown'
			aria-labelledby='tooltip-label'
			aria-haspopup='true'
			aria-expanded='false'
			role='button'
		></span>
		<div className='field-tooltip-content' data-target='dropdown' aria-hidden='true'>
			{content}
		</div>
	</div>
)

const InputField = ({ label, name, type = 'text', required = false, tooltip, ...props }) => (
	<div className={`field ${required ? 'required' : ''}`}>
		<label className='label' htmlFor={name}>
			<span>{label}</span>
		</label>
		<div className='control _with-tooltip'>
			<input
				className='input-text'
				type={type}
				name={name}
				aria-required={required}
				aria-placeholder={label}
				{...props}
			/>
			{tooltip && <Tooltip content={tooltip} />}
		</div>
	</div>
)

export const AddressForm = () => {
	const [isRegistering, setIsRegistering] = useState(false)

	const handleCheckboxChange = () => {
		setIsRegistering(!isRegistering)
	}

	return (
		<li className='checkout-shipping-address fc-size-l'>
			<h5>Адрес за доставка</h5>
			<div className='step-content'>
				<form className='form form-login' method='post' noValidate>
					<fieldset className='fieldset'>
						<InputField
							label='Имейл адрес'
							name='username'
							type='email'
							required
							tooltip='Ще изпратим потвърждение на поръчката тук.'
						/>
						<div className='fieldset checkout-registration'>
							<div className='field fc-field-choice'>
								<div className='control'>
									<div className='choice field fc-dirty'>
										<input
											type='checkbox'
											className='checkbox'
											name='register_account'
											onChange={handleCheckboxChange}
										/>
										<label className='label' htmlFor='registration-checkbox'>
											<span>Регистрация</span>
										</label>
									</div>
								</div>
							</div>
							{isRegistering && (
								<div className='fieldset registration-form'>
									<InputField
										label='Парола'
										name='registration-password'
										type='password'
										tooltip={'Минимум 6 знака'}
										required
									/>
									<InputField
										label='Потвърдете паролата'
										name='registration-password-confirmation'
										type='password'
										tooltip={'Минимум 6 знака'}
										required
									/>
								</div>
							)}
						</div>
						<fieldset className='fieldset hidden-fields'>
							<InputField
								label='Парола'
								tooltip='Минимум 6 знака'
								name='password'
								type='password'
							/>
							<input name='captcha_form_id' type='hidden' value='user_login' />
							<div className='actions-toolbar'>
								<input name='context' type='hidden' value='checkout' />
								<div className='primary'>
									<button type='submit' className='action login primary'>
										<span>Вход</span>
									</button>
								</div>
								<div className='secondary'>
									<a className='action remind'>
										<span>Забравили сте паролата си?</span>
									</a>
								</div>
							</div>
						</fieldset>
					</fieldset>
					<input type='text' name='token' style={{ display: 'none' }} />
				</form>
				<form className='form form-shipping-address fc-size-l'>
					<div className='fieldset address'>
						<InputField
							tooltip='Въпроси за доставка.'
							label='Име'
							name='firstname'
							required
						/>
						<InputField
							tooltip='Въпроси за доставка.'
							label='Фамилия'
							name='lastname'
							required
						/>
						<InputField
							label='Телефон'
							name='telephone'
							required
							tooltip='Въпроси за доставка.'
						/>
						<fieldset className='field postcode admin__control-fields'>
							<legend className='label'>
								<span>Post code</span>
							</legend>
							<div className='control'>
								<InputField
									tooltip='Въпроси за доставка.'
									label='Post code'
									name='postcode'
								/>
							</div>
						</fieldset>
						<div className='field _required fc-dirty'>
							<label className='label' htmlFor='country_id'>
								<span>Държава</span>
							</label>
							<div className='control'>
								<select className='select' name='country_id' aria-required='true'>
									<option value=''>Моля изберете</option>
									<option value='BG' selected>
										България
									</option>
									<option value='delimiter' disabled>
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
							<label className='label' htmlFor='region_id'>
								<span>Област / Провинция</span>
							</label>
							<div className='control'>
								<select className='select' name='region_id'>
									{locationOptions.regionOptions.map((option, index) => (
										<option key={index} value={option.value}>
											{option.label}
										</option>
									))}
								</select>
							</div>
						</div>
						<InputField tooltip='град' label='Населено място' name='city' />
						<InputField tooltip='адрес' label='Адрес' name='street[0]' />
						<InputField
							tooltip=''
							label='boxnow_id'
							name='custom_attributes[boxnow_id]'
						/>
						<div className='field'>
							<label className='label' htmlFor='shiping_delivery_data'>
								<span>Shipping delivery data</span>
							</label>
							<div className='control'>
								<textarea
									className='admin__control-textarea'
									name='custom_attributes[shiping_delivery_data]'
									cols={15}
									rows={2}
									aria-describedby='notice-shiping_delivery_data'
								></textarea>
							</div>
						</div>
						<InputField
							tooltip='метод за доставка'
							label='Shipping delivery method data'
							name='custom_attributes[shipping_delivery_method_data]'
						/>
					</div>
				</form>
			</div>
		</li>
	)
}
