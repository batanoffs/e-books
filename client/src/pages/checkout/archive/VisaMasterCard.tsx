import { Controller } from 'react-hook-form'
import { Box, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material'

export const VisaMasterCard = ({ control, paymentMethod }) => {
	return (
		<Box className='payment-method'>
			<FormControl component='fieldset'>
				<Controller
					name='paymentMethod'
					control={control}
					defaultValue='dsk'
					render={({ field }) => (
						<RadioGroup {...field}>
							<FormControlLabel
								value='dsk'
								control={<Radio />}
								label='Visa, MasterCard, Дебитна/Кредитна карта'
							/>
						</RadioGroup>
					)}
				/>
			</FormControl>

			{paymentMethod === 'dsk' && (
				<Box className='payment-method-content dsk'>
					<Typography variant='body1'>
						Ще бъдете пренасочени към сайта на ePay.bg след като завършите поръчката си.
					</Typography>
					<Box className='payment-method-billing-address'></Box>
					<Box className='checkout-agreements-block'>
						<Box data-role='checkout-agreements'>
							<Box
								className='checkout-agreements fieldset'
								style={{ display: 'block' }}
							></Box>
						</Box>
					</Box>
				</Box>
			)}
		</Box>
	)
}

// export const VisaMasterCard = () => {
// 	return (
// 		<div className='payment-method'>
// 			<div className='payment-method-title field choice fc-dirty'>
// 				<input type='radio' name='payment[method]' className='radio' id='dsk' value='dsk' />
// 				<label className='label' htmlFor='dsk'>
// 					<span>Visa, MasterCard, Дебитна/Кредитна карта</span>
// 				</label>
// 			</div>

// 			<div className='payment-method-content dsk'>
// 				<div className='payment-method-billing-address'></div>
// 				<div className='checkout-agreements-block'>
// 					<div data-role='checkout-agreements'>
// 						<div
// 							className='checkout-agreements fieldset'
// 							style={{ display: 'none' }}
// 						></div>
// 					</div>

// 					<div
// 						className='payment-option _collapsible opc-payment-additional comment last _active'
// 						data-collapsible='true'
// 						role='tablist'
// 					>
// 						<div
// 							className='payment-option-title field choice'
// 							data-role='title'
// 							role='tab'
// 							aria-selected={true}
// 							aria-expanded='true'
// 							tabIndex={0}
// 						>
// 							<span className='action action-toggle' role='heading' aria-level={2}>
// 								<span>Имате ли коментар към поръчката?</span>
// 							</span>
// 						</div>
// 						<div
// 							className='payment-option-content'
// 							data-role='content'
// 							role='tabpanel'
// 							aria-hidden='false'
// 						>
// 							<form className='form form-discount order-comment-form'>
// 								<div className='payment-option-inner'>
// 									<div className='field'>
// 										<div className='control'>
// 											<textarea
// 												className='input-text order-comment order-comment-input'
// 												name='comment-code'
// 												rows={4}
// 												aria-placeholder='Въведете вашият коментар'
// 											></textarea>
// 											<p></p>
// 										</div>
// 									</div>
// 								</div>
// 							</form>
// 						</div>
// 					</div>
// 				</div>
// 				<div className='actions-toolbar'>
// 					<div className='primary'>
// 						<button
// 							className='action primary checkout'
// 							type='submit'
// 							disabled={true}
// 							title='Go to payment form'
// 						>
// 							<span>Go to payment form</span>
// 						</button>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	)
// }
