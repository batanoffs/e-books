import { useState } from 'react'
import {
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Box,
	Button,
	FormControl,
	InputLabel,
	OutlinedInput,
	Typography,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useForm, Controller } from 'react-hook-form'

export const DiscountCode = () => {
	const { control, handleSubmit, reset } = useForm()
	const [expanded, setExpanded] = useState(false)

	const onSubmit = (data) => {
		console.log(data)
		reset()
	}

	const handleAccordionChange = (isExpanded) => {
		setExpanded(isExpanded)
	}

	return (
		<Box
			className='payment-option _collapsible opc-payment-additional discount-code'
			role='tablist'
		>
			<Accordion expanded={expanded} onChange={() => handleAccordionChange(!expanded)}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls='discount-content'
					id='discount-header'
				>
					<Typography variant='h6'>Приложи код за отстъпка</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Box
						component='form'
						id='discount-form'
						onSubmit={handleSubmit(onSubmit)}
						noValidate
					>
						<FormControl fullWidth variant='outlined' margin='normal'>
							<InputLabel htmlFor='discount-code'>Въведи код за отстъпка</InputLabel>
							<Controller
								name='discount_code'
								control={control}
								defaultValue=''
								rules={{ required: 'Това поле е задължително' }}
								render={({ field }) => (
									<OutlinedInput
										{...field}
										id='discount-code'
										label='Въведи код за отстъпка'
									/>
								)}
							/>
						</FormControl>
						<Box textAlign='right' mt={2}>
							<Button type='submit' variant='contained' color='primary'>
								Приложи отстъпка
							</Button>
						</Box>
					</Box>
				</AccordionDetails>
			</Accordion>
		</Box>
	)
}

// export const DiscountCode = () => {
// 	return (
// 		<div
// 			className='payment-option _collapsible opc-payment-additional discount-code'
// 			data-collapsible='true'
// 			role='tablist'
// 		>
// 			<div
// 				className='payment-option-title field choice'
// 				data-role='title'
// 				role='tab'
// 				aria-selected={true}
// 				aria-expanded='false'
// 				tabIndex={0}
// 			>
// 				<span
// 					className='action action-toggle'
// 					id='block-discount-heading'
// 					role='heading'
// 					aria-level={2}
// 				>
// 					<span>Приложи код за отстъпка</span>
// 				</span>
// 			</div>
// 			<div
// 				className='payment-option-content'
// 				data-role='content'
// 				role='tabpanel'
// 				aria-hidden='true'
// 				style={{ display: 'none' }}
// 			>
// 				<div data-role='checkout-messages' className='messages'></div>

// 				<form className='form form-discount' id='discount-form'>
// 					<div className='payment-option-inner'>
// 						<div className='field'>
// 							<label className='label' htmlFor='discount-code'>
// 								<span>Въведи код за отстъпка</span>
// 							</label>
// 							<div className='control'>
// 								<input
// 									className='input-text'
// 									type='text'
// 									id='discount-code'
// 									name='discount_code'
// 									data-validate="{'required-entry':true}"
// 									aria-placeholder='Въведи код за отстъпка'
// 								/>
// 							</div>
// 						</div>
// 					</div>
// 					<div className='actions-toolbar'>
// 						<div className='primary'>
// 							<button
// 								className='action action-apply'
// 								type='submit'
// 								value='Приложи отстъпка'
// 							>
// 								<span>
// 									<span>Приложи отстъпка</span>
// 								</span>
// 							</button>
// 						</div>
// 					</div>

// 					<input
// 						name='captcha_form_id'
// 						type='hidden'
// 						value='sales_rule_coupon_request'
// 						data-scope=''
// 					/>
// 				</form>
// 			</div>
// 		</div>
// 	)
// }
