import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'

export const OrderTabs = ({ status, handleStatusChange }) => (
	<Box sx={{ borderBottom: 1, borderColor: 'divider', marginBottom: 2 }}>
		<Tabs
			value={status}
			onChange={handleStatusChange}
			aria-label='Order status tabs'
			variant='scrollable'
		>
			<Tab label='Виж всички' value='all' />
			<Tab label='За изплащане' value='to_pay' />
			<Tab label='За изпращане' value='to_ship' />
			<Tab label='Изпратено' value='shipped' />
			<Tab label='Обработено' value='processed' />
		</Tabs>
	</Box>
)
