import { Box,Button,FormControl,Grid,InputLabel,MenuItem,Select,TextField } from '@mui/material'
import { Controller } from 'react-hook-form'
import { locationOptions } from '../../utils/constants/location'
import { InputFormField } from '../../components/InputFormField/InputFormField'

export const AddressForm = ({ control }) => {

	return (
		<Box component='div'>
			<h5> Адрес за доставка </h5>

			<Grid container spacing={2}>
				<Grid item xs={12}>
					<InputFormField
						label='Имейл адрес'
						name='username'
						type='email'
						required
						tooltip='Ще изпратим потвърждение на поръчката тук.'
						control={control}
					/>
				</Grid>

				<Grid item xs={12} sm={6}>
					<InputFormField
						label='Име'
						name='firstname'
						required
						tooltip='Въпроси за доставка.'
						control={control}
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<InputFormField
						label='Фамилия'
						name='lastname'
						required
						tooltip='Въпроси за доставка.'
						control={control}
					/>
				</Grid>

				<Grid item xs={12} sm={6}>
					<InputFormField
						label='Телефон'
						name='telephone'
						required
						tooltip='Въпроси за доставка.'
						control={control}
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<InputFormField
						label='Post code'
						name='postcode'
						tooltip='Въпроси за доставка.'
						control={control}
					/>
				</Grid>

				<Grid item xs={12} sm={6}>
					<FormControl fullWidth margin='normal'>
						<InputLabel>Държава</InputLabel>
						<Controller
							name='country_id'
							control={control}
							defaultValue='BG'
							render={({ field }) => (
								<Select {...field}>
									<MenuItem value='BG'>България</MenuItem>
									{locationOptions.countryOptions.map((option, index) => (
										<MenuItem key={index} value={option.value}>
											{option.label}
										</MenuItem>
									))}
								</Select>
							)}
						/>
					</FormControl>
				</Grid>

				<Grid item xs={12} sm={6}>
					<FormControl fullWidth margin='normal'>
						<InputLabel>Област / Провинция</InputLabel>
						<Controller
							name='region_id'
							control={control}
							render={({ field }) => (
								<Select {...field}>
									{locationOptions.regionOptions.map((option, index) => (
										<MenuItem key={index} value={option.value}>
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
						tooltip='град'
						control={control}
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<InputFormField
						label='Адрес'
						name='street[0]'
						tooltip='адрес'
						control={control}
					/>
				</Grid>

				<Grid item xs={12} sm={6}>
					<InputFormField
						label='boxnow_id'
						name='custom_attributes[boxnow_id]'
						tooltip=''
						control={control}
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<FormControl fullWidth margin='normal'>
						<InputLabel>Shipping delivery data</InputLabel>
						<Controller
							name='custom_attributes[shiping_delivery_data]'
							control={control}
							render={({ field }) => <TextField {...field} multiline rows={2} />}
						/>
					</FormControl>
				</Grid>

				<Grid item xs={12}>
					<InputFormField
						label='Shipping delivery method data'
						name='custom_attributes[shipping_delivery_method_data]'
						tooltip='метод за доставка'
						control={control}
					/>
				</Grid>

				<Grid item xs={12}>
					<Button type='submit' variant='contained' fullWidth>
						Submit
					</Button>
				</Grid>
			</Grid>
		</Box>
	)
}
