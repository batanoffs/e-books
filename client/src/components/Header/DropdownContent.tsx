import { Paper, Popper, Typography, Button } from '@mui/material'
import { ProductsTable } from '../Tables/ProductsTable'
import formatCurrencyToBGN from '../../utils/helpers/formatCurrency'
import { ListIsEmpty } from '../utils/ListIsEmpty'

type DropdownContentProps = {
	open: boolean
	anchorEl: any
	cartItems: any
	handleNavigateToCart: () => void
}
export const DropdownContent = ({
	open,
	anchorEl,
	cartItems,
	handleNavigateToCart,
}: DropdownContentProps) => {
	const totalCost = Array.isArray(cartItems)
		? cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
		: 0
	const totalCostBGN = formatCurrencyToBGN(totalCost)

	return (
		<Popper
			open={open}
			anchorEl={anchorEl}
			transition
			disablePortal
			placement='bottom-end'
			style={{
				height: 'auto',
				width: '500px',
				position: 'fixed',
				top: 60,
				left: 'calc(100% - 520px)',
				zIndex: 5,
			}}
		>
			<Paper
				sx={{
					padding: '0.5em',
					borderRadius: '0.5em',
					minWidth: '150px',
					marginBottom: '0.5em',
					visibility: 'visible',
				}}
			>
				<Typography variant='body2' sx={{ fontWeight: 'bold', textAlign: 'center' }}>
					Количка
				</Typography>
				{cartItems.length > 0 ? <ProductsTable products={cartItems} /> : <ListIsEmpty />}
				<Typography variant='h5' sx={{ textAlign: 'center', my: 2 }}>
					Обща стойност: {totalCostBGN}
				</Typography>
				<Button variant='contained' sx={{ width: '100%' }} onClick={handleNavigateToCart}>
					Към количката
				</Button>
			</Paper>
		</Popper>
	)
}
