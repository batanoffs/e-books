import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import Grid from '@mui/material/Grid'
import InputLabel from '@mui/material/InputLabel'
import FormLabel from '@mui/material/FormLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import { Controller } from 'react-hook-form'
import { regionOptions } from '../../utils/constants/paymentFormConstants'
import { InputFormField } from '../../components/InputFormField/InputFormField'

export const AddressForm = ({ control, errors }) => {
	return (
		<Box component='div' id='address-form'>
			<FormLabel sx={{ mb: 1, color: 'text.primary' }} component='legend'>
				Адрес за доставка
			</FormLabel>

			<Grid container columnSpacing={1}>
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
						type='number'
						name='telephone'
						required
						control={control}
						errors={errors?.telephone}
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<InputFormField
						label='Пощенски код'
						type='number'
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
								<Select {...field} required>
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
						required
						control={control}
						errors={errors?.city}
					/>
				</Grid>
				<Grid item xs={12}>
					<InputFormField
						label='Адрес'
						name='street'
						required
						control={control}
						errors={errors?.street}
					/>
				</Grid>
				<Grid item xs={12}>
					<InputFormField
						label='Допълнителна информация за доставка'
						name='custom_attributes.shiping_delivery_data'
						multiline={true}
						rows={2}
						control={control}
						errors={errors?.street}
					/>
				</Grid>
			</Grid>
		</Box>
	)
}
