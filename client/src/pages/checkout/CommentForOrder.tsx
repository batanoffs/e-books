import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import TextareaAutosize from '@mui/material/TextareaAutosize'
import Typography from '@mui/material/Typography'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
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
