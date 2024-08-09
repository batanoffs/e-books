import {
	Box,
	Button,
	FormControl,
	TextareaAutosize,
	Typography,
	Accordion,
	AccordionSummary,
	AccordionDetails,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export const CommentForOrder = ({ control, Controller }) => {
	return (
		<Accordion defaultExpanded>
			<AccordionSummary
				expandIcon={<ExpandMoreIcon />}
				aria-controls='comment-content'
				id='comment-header'
			>
				<Typography variant='h6'>Имате ли коментар към поръчката?</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<FormControl fullWidth margin='normal'>
					<Controller
						name='comment'
						control={control}
						defaultValue=''
						render={({ field }) => (
							<TextareaAutosize
								{...field}
								minRows={4}
								placeholder='Въведете вашият коментар'
								style={{ width: '100%' }}
							/>
						)}
					/>
				</FormControl>
				<Box textAlign='right' mt={2}>
					<Button
						type='submit'
						variant='contained'
						color='primary'
						title='Go to payment form'
					>
						Go to payment form
					</Button>
				</Box>
			</AccordionDetails>
		</Accordion>
	)
}
