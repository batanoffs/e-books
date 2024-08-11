import { Toolbar, useScrollTrigger, Box, Fab, Fade } from '@mui/material'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

interface BackToTopProps {
	children: React.ReactElement
}

const BackToTop = ({ children }: BackToTopProps) => {
	const scrollTrigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 100,
	})

	const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
		const anchor = (event.target as HTMLDivElement).ownerDocument?.querySelector(
			'#back-to-top-anchor'
		)
		anchor?.scrollIntoView({
			block: 'center',
		})
	}

	return (
		<Fade in={scrollTrigger}>
			<Box
				onClick={handleClick}
				role='presentation'
				sx={{ position: 'fixed', bottom: 50, right: 50 }}
			>
				{children}
			</Box>
		</Fade>
	)
}

const ScrollTop = () => (
	<>
		<Toolbar id='back-to-top-anchor' sx={{ height: "10px" }}/>
		<BackToTop>
			<Fab size='large' aria-label='scroll back to top'>
				<KeyboardArrowUpIcon sx={{ height: '40px', width: '40px' }} />
			</Fab>
		</BackToTop>
	</>
)

export default ScrollTop
