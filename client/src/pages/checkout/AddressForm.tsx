import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import Grid from '@mui/material/Grid'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import { Controller } from 'react-hook-form'
import { regionOptions } from '../../utils/constants/paymentFormConstants'
import { TextField, Typography } from '@mui/material'
// import { InputFormField } from '../../components/InputFormField/InputFormField'

export const AddressForm = ({ control, errors, register }) => {
	return (
		<Box component='div' id='address-form'>
			<Typography variant='h5'>Адрес за доставка</Typography>

			<Grid container sx={{ color: 'red' }}>
				<Grid item xs={12} sm={6}>
					<TextField
						label='Име'
						name='firstName'
						type='text'
						{...register('firstName')} //{ required: 'Полето е задължителено' }
						error={!!errors.firstName}
						helperText={errors.firstName?.message}
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						label='Фамилия'
						name='lastName'
						type='text'
						{...register('lastName')} //{ required: 'Полето е задължителено' }
						error={!!errors.lastName}
						helperText={errors.lastName?.message}
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						label='Телефон'
						type='number'
						name='telephone'
						{...register('telephone')} //{ required: 'Полето е задължителено' }
						error={!!errors.telephone}
						helperText={errors.telephone?.message}
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						label='Пощенски код'
						type='number'
						name='postcode'
						{...register('postcode')} //{ required: 'Полето е задължителено' }
						error={!!errors.postcode}
						helperText={errors.postcode?.message}
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<FormControl fullWidth margin='normal' error={!!errors.postcode}>
						<InputLabel>Област / Провинция</InputLabel>
						<Controller
							name='regionId'
							control={control}
							{...register('regionId')} //{ required: 'Полето е задължителено' }
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
					<TextField
						label='Населено място'
						name='city'
						type='text'
						{...register('city')} //{ required: 'Полето е задължителено' }
						error={!!errors.city}
						helperText={errors.city?.message}
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						label='Адрес'
						name='address'
						type='text'
						{...register('address')} //{ required: 'Полето е задължителено' }
						error={!!errors.address}
						helperText={errors.address?.message}
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						label='Допълнителна информация за доставка'
						name='deliveryData'
						id='deliveryData'
						multiline={true}
						type='text'
						rows={3}
						{...register('deliveryData')} //{ required: 'Полето е задължителено' }
						error={!!errors.customAttributes}
						helperText={errors.customAttributes?.message}
					/>
				</Grid>
			</Grid>
		</Box>
	)
}
