import { Box, AppBar, Container, Toolbar, IconButton } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'

import { NavMenu, SearchBar, LocaleSwitcher, AppBarItems } from './index'
import { useThemeSettings } from '../../store/themeSettings'
import Logo from '../utils/Logo'

import styles from './header.module.scss'

export const Header = () => {
	const theme = useTheme()
	const { toggleDarkMode } = useThemeSettings()

	return (
		<AppBar position='static' elevation={0}>
			<Container maxWidth='xl'>
				<Toolbar
					id='back-to-top-anchor'
					sx={{ pl: 5, color: 'text.primary', bgcolor: 'background.paper' }}
					className={styles.headerToolbar}
					variant='dense'
				>
					<Logo />
					<SearchBar />
					<Box className={styles.headerBox}>
						<IconButton sx={{ ml: 1 }} onClick={toggleDarkMode} color='primary'>
							{theme.palette.mode === 'dark' ? (
								<Brightness4Icon />
							) : (
								<Brightness7Icon />
							)}
						</IconButton>
						<AppBarItems />
						<LocaleSwitcher />
					</Box>
				</Toolbar>
				<Toolbar
					variant='dense'
					sx={{
						minHeight: '40px',
						bgcolor: 'secondary.main',
						color: 'text.primary',
						border: `1px solid ${theme.palette.divider}`,
					}}
					className={styles.headerToolbarMenu}
				>
					<NavMenu />
				</Toolbar>
			</Container>
		</AppBar>
	)
}
