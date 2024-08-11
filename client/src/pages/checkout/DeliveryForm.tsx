import {
	Box,
	FormControl,
	FormControlLabel,
	FormLabel,
	Paper,
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
		<Box component='div' id='shipping-method'>
			<FormControl component='fieldset' fullWidth>
				<FormLabel sx={{ mb: 1, color: 'text.primary' }} component='h5'>
					Изберете начин на доставка
				</FormLabel>
				<Paper>
					<Controller
						name='shippingMethod'
						control={control}
						rules={{ required: 'Please select a shipping method' }}
						render={({ field }) => (
							<RadioGroup {...field}>
								<Table>
									{/* <TableHead>
										<TableRow>
											<TableCell></TableCell>
											<TableCell>Доставчик</TableCell>
											<TableCell>Метод</TableCell>
											<TableCell>Цена</TableCell>
										</TableRow>
									</TableHead> */}
									<TableBody>
										{deliveryOptions.map((option) => (
											<TableRow key={option.value}>
												<TableCell>
													<FormControlLabel
														value={option.value}
														control={<Radio />}
														label={''}
													/>
												</TableCell>
												<TableCell>{option.method}</TableCell>
												<TableCell>{option.provider}</TableCell>
												<TableCell>{option.price}</TableCell>
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
				</Paper>
			</FormControl>
		</Box>
	)
}
