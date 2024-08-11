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
import { Controller } from 'react-hook-form'

export const DiscountCode = ({ control, errors, reset }) => {
	const [expanded, setExpanded] = useState<Boolean>(false)

	const onSubmit = (data) => {
		console.log(data)
		reset()
	}

	const handleAccordionChange = (isExpanded: Boolean) => {
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
					<Box component='form' id='discount-form' onSubmit={onSubmit} noValidate>
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
