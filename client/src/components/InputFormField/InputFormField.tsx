import { FormControl, TextField } from '@mui/material'
import { Controller } from 'react-hook-form'

type InputFormFieldProps = {
	label: string
	name: string
	type?: string
	required?: boolean
	control: any
	errors?: any
}

export const InputFormField = ({
	label,
	name,
	type = 'text',
	required = false,
	control,
	errors,
}: InputFormFieldProps) => {
	return (
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
						helperText={errors?.message}
					/>
				)}
			/>
		</FormControl>
	)
}
