import { Toolbar, CssBaseline, useScrollTrigger, Box, Fab, Fade } from '@mui/material'
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
				sx={{ position: 'fixed', bottom: 16, right: 16 }}
			>
				{children}
			</Box>
		</Fade>
	)
}

const ScrollTop = () => (
	<>
		<CssBaseline />
		<Toolbar id='back-to-top-anchor' />
		<BackToTop>
			<Fab size='small' aria-label='scroll back to top'>
				<KeyboardArrowUpIcon />
			</Fab>
		</BackToTop>
	</>
)

export default ScrollTop