import { paymentOptions } from '../../utils/constants/paymentFormConstants'
import { Faktura } from './Faktura'
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

type PaymentOptionsProps = {
	control: any
	errors: any
}

export const PaymentForm = ({ control, errors }: PaymentOptionsProps) => {
	return (
		<Box component='li' id='payment-method'>
			<FormControl component='fieldset' fullWidth>
				<FormLabel component='legend'>
					<h6>Изберете начин на плащане</h6>
				</FormLabel>
				<Controller
					name='paymentMethod'
					control={control}
					rules={{ required: 'Please select a payment method' }}
					render={({ field }) => (
						<RadioGroup {...field}>
							<Table>
								{/* <TableHead>
									<TableRow>
										<TableCell></TableCell>
										<TableCell>Цена</TableCell>
										<TableCell>Доставчик</TableCell>
										<TableCell>Метод</TableCell>
									</TableRow>
								</TableHead> */}
								<TableBody>
									{paymentOptions.map((option) => (
										<TableRow key={option.value}>
											<TableCell>
												<FormControlLabel
													value={option.value}
													control={<Radio />}
													label=''
												/>
											</TableCell>
											<TableCell>{option.value}</TableCell>
											<TableCell>{option.provider}</TableCell>
											<TableCell>{option.method}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</RadioGroup>
					)}
				/>
				{errors?.paymentMethod && (
					<Typography color='error'>{errors.paymentMethod.message}</Typography>
				)}
			</FormControl>
			{/* <Faktura /> */}
		</Box>
	)
}
