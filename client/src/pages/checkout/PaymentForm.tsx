import { Controller } from 'react-hook-form'

import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import Paper from '@mui/material/Paper'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'

import { paymentOptions } from '../../utils/constants/paymentFormConstants'
import { Faktura } from './Faktura'

type PaymentOptionsProps = {
	control: any
	errors: any
}

export const PaymentForm = ({ control, errors }: PaymentOptionsProps) => {
	return (
		<FormControl component='fieldset' fullWidth id='payment-method'>
			<FormLabel sx={{ mb: 2, ml: 2, color: 'text.primary' }} component='h5'>
				Изберете начин на плащане
			</FormLabel>
			<Paper>
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
													label={''}
												/>
											</TableCell>
											<TableCell>{option.method}</TableCell>
											<TableCell>{option.value}</TableCell>
											<TableCell>{option.provider}</TableCell>
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
			</Paper>
			{/* <Faktura /> */}
		</FormControl>
	)
}
