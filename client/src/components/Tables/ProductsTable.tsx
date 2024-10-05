import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from '@mui/material'
import formatCurrencyToBGN from '../../utils/helpers/formatCurrency'

export const ProductsTable = ({ products }) => {
	return (
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
					{products.map((product: any) => (
						<TableRow key={product.product._id}>
							<TableCell>
								<img style={{ width: '50px' }} src={product.product.picture} />
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
								{product.product.title}
							</TableCell>
							<TableCell>{formatCurrencyToBGN(product.product.price)}</TableCell>
							<TableCell>{product.quantity}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	)
}
