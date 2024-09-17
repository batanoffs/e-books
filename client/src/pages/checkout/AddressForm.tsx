import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import Grid from '@mui/material/Grid'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import { Controller } from 'react-hook-form'
import { regionOptions } from '../../utils/constants/paymentFormConstants'
import { InputFormField } from '../../components/InputFormField/InputFormField'
import { Typography } from '@mui/material'

export const AddressForm = ({ control, errors, register }) => {
	return (
		<Box component='div' id='address-form'>
			<Typography variant='h5'>Адрес за доставка</Typography>

			<Grid container sx={{ color: 'red', columnGap: '4em' }}>
				<Grid item xs={12} sm={5}>
					<InputFormField
						label='Име'
						name='firstName'
						type='text'
						required
						control={control}
						{...register('firstName')}
						errors={errors?.firstName}
					/>
				</Grid>
				<Grid item xs={12} sm={5}>
					<InputFormField
						label='Фамилия'
						name='lastName'
						type='text'
						required
						control={control}
						{...register('lastName')}
						errors={errors?.lastName}
					/>
				</Grid>
				<Grid item xs={12} sm={5}>
					<InputFormField
						label='Телефон'
						type='number'
						name='telephone'
						required
						control={control}
						{...register('telephone')}
						errors={errors?.telephone}
					/>
				</Grid>
				<Grid item xs={12} sm={5}>
					<InputFormField
						label='Пощенски код'
						type='number'
						name='postcode'
						control={control}
						{...register('postcode')}
						errors={errors?.postcode}
					/>
				</Grid>
				<Grid item xs={12} sm={5}>
					<FormControl fullWidth margin='normal'>
						<InputLabel>Област / Провинция</InputLabel>
						<Controller
							name='region_id'
							type='text'
							control={control}
							{...register('region_id')}
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
				<Grid item xs={12} sm={5}>
					<InputFormField
						label='Населено място'
						name='city'
						type='text'
						required
						control={control}
						{...register('city')}
						errors={errors?.city}
					/>
				</Grid>
				<Grid item xs={11}>
					<InputFormField
						label='Адрес'
						name='street'
						type='text'
						required
						control={control}
						{...register('street')}
						errors={errors?.street}
					/>
				</Grid>
				<Grid item xs={11}>
					<InputFormField
						label='Допълнителна информация за доставка'
						name='custom_attributes.shipping_delivery_data'
						multiline={true}
						type='text'
						rows={3}
						control={control}
						{...register('custom_attributes.shipping_delivery_data')}
						errors={errors?.street}
					/>
				</Grid>
			</Grid>
		</Box>
	)
}
