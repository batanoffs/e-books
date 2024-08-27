import { Labeled } from 'react-admin'
import Chip from '@mui/material/Chip' // Assuming you're using Material-UI
import Box from '@mui/material/Box' // For layout

const ShowCategoriesChip = ({ record }) => {
	const categories = record.categories || [] // Ensure categories is defined

	return (
		<Labeled label='Категории' color='#6028c8'>
			<Box>
				{categories.map((category, index) => (
					<Chip key={index} label={category} style={{ margin: '4px' }} />
				))}
			</Box>
		</Labeled>
	)
}

export default ShowCategoriesChip
