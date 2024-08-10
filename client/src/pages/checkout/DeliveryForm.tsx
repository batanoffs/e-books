import {
	Box,
	FormControl,
	FormControlLabel,
	FormLabel,
	Radio,
	RadioGroup,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	Typography,
} from '@mui/material'
import { Controller } from 'react-hook-form'
import { deliveryOptions } from '../../utils/constants/paymentFormConstants'

//TODO Provide options for office and onsite delivery!!!

export const DeliveryForm = ({ errors, control }) => {
	return (
		<Box component='li' id='shipping-method'>
			<FormControl component='fieldset' fullWidth>
				<FormLabel component='legend'>
					<h6>Изберете начин на доставка</h6></FormLabel>
				<Controller
					name='shippingMethod'
					control={control}
					rules={{ required: 'Please select a shipping method' }}
					render={({ field }) => (
						<RadioGroup {...field}>
							<Table>
								<TableHead>
									<TableRow>
										<TableCell></TableCell>
										<TableCell>Цена</TableCell>
										<TableCell>Доставчик</TableCell>
										<TableCell>Метод</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{deliveryOptions.map((option) => (
										<TableRow key={option.value}>
											<TableCell>
												<FormControlLabel
													value={option.value}
													control={<Radio />}
													label=''
												/>
											</TableCell>
											<TableCell>{option.price}</TableCell>
											<TableCell>{option.provider}</TableCell>
											<TableCell>{option.method}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</RadioGroup>
					)}
				/>
				{errors?.shippingMethod && (
					<Typography color='error'>{errors.shippingMethod.message}</Typography>
				)}
			</FormControl>
		</Box>
	)
}
