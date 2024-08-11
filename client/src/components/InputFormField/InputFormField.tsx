import { FormControl, TextField } from '@mui/material'
import { Controller } from 'react-hook-form'

type InputFormFieldProps = {
	label: string
	name: string
	type?: string
	required?: boolean
	control: any
	errors?: any
	multiline?: boolean
	rows?: number
}

export const InputFormField = ({
	label,
	name,
	type = 'text',
	required = false,
	control,
	errors,
	multiline,
	rows,
}: InputFormFieldProps) => {
	return (
		<>
			{type === 'number' && (
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
								error={Boolean(errors)}
								helperText='Incorrect entry.'
							/>
						)}
					/>
				</FormControl>
			)}
			{type === 'text' && (
				<FormControl fullWidth margin='normal'>
					<Controller
						name={name}
						control={control}
						render={({ field }) => (
							<TextField
								{...field}
								label={label}
								type={type}
								rows={rows}
								multiline={multiline}
								required={required}
								error={Boolean(errors)}
								helperText='Incorrect entry.'
							/>
						)}
					/>
				</FormControl>
			)}
		</>
	)
}
