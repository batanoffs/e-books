import { useScrollTrigger, Fade, Fab, Box } from '@mui/material'
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

const BackToTopButton = ({ children }: BackToTopProps) => {
	const scrollTrigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 100,
	})

	const handleClick = () => {
		const secondAnchor = document.querySelector('#back-to-top-anchor')
		secondAnchor?.scrollIntoView({
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

export const ScrollTopButton = () => (
	<BackToTopButton>
		<Fab size='large' aria-label='scroll back to top'>
			<KeyboardArrowUpIcon sx={{ height: '40px', width: '40px' }} />
		</Fab>
	</BackToTopButton>
)
