import {
	Box,
	Button,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from '@mui/material'
import formatCurrencyToBGN from '../../utils/helpers/formatCurrency'
import { useEffect, useState } from 'react'

export const CheckoutOverview = ({ cart, handleBackToCart }) => {
	const [totalSum, setTotalSum] = useState(0)

	useEffect(() => {
		const calculateTotalSum = () => {
			const total = cart.reduce((acc, product) => {
				return acc + product.price * product.quantity
			}, 0)
			setTotalSum(total)
		}

		calculateTotalSum()
	}, [cart])

	return (
		<Paper sx={{ padding: '1rem' }}>
			<Typography variant='h6' align='center'>
				Обобщение на поръчката
			</Typography>
			<TableContainer sx={{ marginTop: '1rem' }}>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Продукт</TableCell>
							<TableCell>Име</TableCell>
							<TableCell>Цена</TableCell>
							<TableCell>Брой</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{cart.map((product) => (
							<TableRow key={product.id}>
								<TableCell>
									<img style={{ width: '50px' }} src={product.productImagePath} />
								</TableCell>
								<TableCell
									sx={{
										maxWidth: '200px',
										minWidth: '150px',
										overflowWrap: 'break-word',
										wordWrap: 'break-word',
										wordBreak: 'break-word',
										lineHeight: '1.2',
									}}
								>
									{product.name}
								</TableCell>
								<TableCell>{formatCurrencyToBGN(product.price)}</TableCell>
								<TableCell>{product.quantity}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>

			<Typography align='center' variant='h6' sx={{ marginTop: '1rem' }}>
				Обща стойност: {formatCurrencyToBGN(totalSum)}
			</Typography>

			<Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
				<Button onClick={handleBackToCart} variant='contained' color='primary'>
					Количка
				</Button>
				<Button type='submit' variant='contained' color='secondary'>
					Завършване на поръчката
				</Button>
			</Box>
		</Paper>
	)
}
