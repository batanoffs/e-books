import { Box } from '@mui/material'
import { useFieldValue } from 'react-admin'

type Props = {
	sx?: object
	imgWidth?: string
	imageTitle?: boolean
}

const CustomCoverImage = ({ sx = {}, imgWidth = '100px', imageTitle = false }: Props) => {
	const coverUrl = useFieldValue({ source: 'picture' })

	return (
		<Box component='div' sx={{ ...sx }}>
			<li style={{ listStyle: 'none' }}>
				<img
					alt='Липсва Корица'
					id='cover'
					title={imageTitle ? title : undefined}
					src={coverUrl}
					style={{ overflow: 'hidden', aspectRatio: '2/3', width: imgWidth }}
				/>
			</li>
		</Box>
	)
}

export default CustomCoverImage
