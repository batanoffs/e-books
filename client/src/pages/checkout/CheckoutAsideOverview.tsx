import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import formatCurrencyToBGN from '../../utils/helpers/formatCurrency'
import { useEffect, useState } from 'react'
import useCartStore from '../../store/cart'

export const CheckoutOverview = ({ handleBackToCart, renderTime }) => {
	const cart = useCartStore((state) => state.cart)
	const [totalSum, setTotalSum] = useState(0)

	useEffect(() => {
		const calculateTotalSum = () => {
			const total = cart.reduce((acc, item) => {
				return acc + item.product.price * item.quantity
			}, 0)
			setTotalSum(total)
		}

		calculateTotalSum()
	}, [cart])

	return (
		<Paper sx={{ padding: '1rem' }}>
			<Typography variant='h5' align='center'>
				Обобщение на поръчката ({renderTime / 2})
			</Typography>
			<TableContainer sx={{ marginTop: '1rem' }}>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Продукти</TableCell>
							<TableCell>Име</TableCell>
							<TableCell>Цена</TableCell>
							<TableCell>Брой</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{cart.map((item) => (
							<TableRow key={item.product._id}>
								<TableCell>
									<img style={{ width: '50px' }} src={item.product.picture} />
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
									{item.product.title}
								</TableCell>
								<TableCell>{formatCurrencyToBGN(item.product.price)}</TableCell>
								<TableCell>{item.quantity}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>

			<Typography align='center' variant='h6' sx={{ marginTop: '1em' }}>
				Обща стойност: {formatCurrencyToBGN(totalSum)}
			</Typography>

			<Box sx={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '1em' }}>
				<Button onClick={handleBackToCart} variant='contained' color='primary'>
					Назад
				</Button>
				<Button type='submit' variant='contained' color='secondary'>
					Плащане
				</Button>
			</Box>
		</Paper>
	)
}
