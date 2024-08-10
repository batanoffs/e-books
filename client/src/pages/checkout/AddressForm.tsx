import {
	Box,
	FormControl,
	Grid,
	InputLabel,
	FormLabel,
	MenuItem,
	Select,
	TextField,
} from '@mui/material'
import { Controller } from 'react-hook-form'
import { regionOptions } from '../../utils/constants/paymentFormConstants'
import { InputFormField } from '../../components/InputFormField/InputFormField'

export const AddressForm = ({ control, errors }) => {
	return (
		<Box component='li' id='address-form'>
			<FormLabel component='legend'>
				<h6 style={{ margin: '1em 0' }}>Адрес за доставка</h6>
			</FormLabel>

			<Grid container spacing={2}>
				<Grid item xs={12} sm={6}>
					<InputFormField
						label='Име'
						name='firstname'
						required
						control={control}
						errors={errors?.firstname}
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<InputFormField
						label='Фамилия'
						name='lastname'
						required
						control={control}
						errors={errors?.lastname}
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<InputFormField
						label='Телефон'
						name='telephone'
						required
						control={control}
						errors={errors?.telephone}
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<InputFormField
						label='Пощенски код'
						name='postcode'
						control={control}
						errors={errors?.postcode}
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<FormControl fullWidth margin='normal'>
						<InputLabel>Област / Провинция</InputLabel>
						<Controller
							name='region_id'
							control={control}
							render={({ field }) => (
								<Select {...field}>
									{regionOptions.map((option) => (
										<MenuItem key={option.value} value={option.value}>
											{option.label}
										</MenuItem>
									))}
								</Select>
							)}
						/>
					</FormControl>
				</Grid>
				<Grid item xs={12} sm={6}>
					<InputFormField
						label='Населено място'
						name='city'
						control={control}
						errors={errors?.city}
					/>
				</Grid>
				<Grid item xs={12}>
					<InputFormField
						label='Адрес'
						name='street'
						control={control}
						errors={errors?.street}
					/>
				</Grid>
				<Grid item xs={12}>
					<FormControl fullWidth margin='normal'>
						<InputLabel>Допълнителна информация за доставка</InputLabel>
						<Controller
							name='custom_attributes.shiping_delivery_data'
							control={control}
							render={({ field }) => <TextField {...field} multiline rows={2} />}
						/>
					</FormControl>
				</Grid>
			</Grid>
		</Box>
	)
}
