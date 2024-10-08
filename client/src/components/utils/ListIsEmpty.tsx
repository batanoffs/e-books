import { useNavigate } from 'react-router-dom'

import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export const ListIsEmpty = () => {
	const navigate = useNavigate()

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				height: '40vh',
				textAlign: 'center',
			}}
		>
			<Typography variant='h3' sx={{ mb: 2 }}>
				Няма намерени продукти
			</Typography>
			<Typography variant='subtitle1'>Добави продукт и той ще се появи тук</Typography>
			<Button
				variant='contained'
				onClick={() => navigate(`/catalog/books`)}
				color='primary'
				sx={{ mt: 4 }}
			>
				Обратно към каталога
			</Button>
		</Box>
	)
}
