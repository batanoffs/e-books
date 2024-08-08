import { FormControl, TextField } from '@mui/material'
import { Controller } from 'react-hook-form'

export const InputFormField = ({
	label,
	name,
	type = 'text',
	required = false,
	tooltip,
	control,
}) => (
	<FormControl fullWidth margin='normal'>
		<Controller
			name={name}
			control={control}
			render={({ field }) => (
				<TextField
					{...field}
					label={label}
					type={type}
					required={required}
					helperText={tooltip}
				/>
			)}
		/>
	</FormControl>
)
