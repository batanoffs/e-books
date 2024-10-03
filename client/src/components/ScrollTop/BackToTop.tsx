import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'
import Fade from '@mui/material/Fade'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

interface BackToTopProps {
	children: React.ReactElement
}

export const ScrollToTopAction = () => {
	const { pathname } = useLocation()

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [pathname])

	return null
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

export const ScrollTop = () => (
	<>
		<Toolbar id='back-to-top-anchor' sx={{ height: '10px' }} />
		<BackToTop>
			<Fab size='large' aria-label='scroll back to top'>
				<KeyboardArrowUpIcon sx={{ height: '40px', width: '40px' }} />
			</Fab>
		</BackToTop>
	</>
)
