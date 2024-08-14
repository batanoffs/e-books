import { useState } from 'react'
import { Controller } from 'react-hook-form'

import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

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
