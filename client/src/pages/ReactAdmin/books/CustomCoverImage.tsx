import Typography from '@mui/material/Typography'
import { useFieldValue } from 'react-admin'
import formatImageBase64 from '../../../utils/helpers/formatImageBase64'

type Props = {
	sx?: object
	imgWidth?: string
	imageTitle?: boolean
	newCover?: string
}

const CustomCoverImage = ({
	sx = {},
	imgWidth = '100px',
	imageTitle = false,
	newCover,
	...props
}: Props) => {
	const imageData = useFieldValue({ source: 'coverImage' })
	const imageType = useFieldValue({ source: 'coverImageType' })
	const title = useFieldValue({ source: 'title' })
	const img = formatImageBase64(imageType, imageData)

	return (
		<Typography component='div' sx={{ ...sx }}>
			<li style={{ listStyle: 'none' }}>
				<img
					alt='Липсва Корица'
					id='cover'
					title={imageTitle ? title : undefined}
					src={img}
					style={{ overflow: 'hidden', aspectRatio: '2/3', width: imgWidth }}
				/>
			</li>
		</Typography>
	)
}

export default CustomCoverImage
