import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import Typography from '@mui/material/Typography'

import { deliveryOptions } from '../../utils/constants/paymentFormConstants'

export const DeliveryForm = ({ register, errors, control }) => {
	return (
		<Box component='div' id='shipping-method'>
			<Typography variant='h5' sx={{ marginBottom: '1rem' }}>
				Изберете начин на доставка
			</Typography>
			<FormControl fullWidth error={!!errors.shippingMethod}>
				<InputLabel id='shipping-method-label'>Доставчик</InputLabel>
				<Select
					labelId='shipping-method-label'
					id='shipping-method'
					name='shippingMethod'
					label='Shipping method'
					{...register('shippingMethod')} //  { required: 'Полето е задължителено' }
				>
					{deliveryOptions.map(({ value, provider }) => (
						<MenuItem key={value} value={value}>
							{provider}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</Box>
	)
}
