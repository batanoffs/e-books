import { Box, AppBar, Container, Toolbar, IconButton } from '@mui/material'
import { NavMenu, SearchBar, LocaleSwitcher, AppBarItems } from './index'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import Logo from '../utils/Logo'
import styles from './header.module.scss'
import { useTheme } from '@mui/material/styles'
import { useThemeSettings } from '../../store/themeSettings'

export const Header = () => {
	const theme = useTheme()
	const { toggleDarkMode } = useThemeSettings()

	return (
		<AppBar position='static' elevation={0}>
			<Container maxWidth='xl'>
				<Toolbar
					id='back-to-top-anchor'
					sx={{ pl: 5 }}
					className={styles.headerToolbar}
					variant='dense'
				>
					<Logo />
					<SearchBar />
					<Box className={styles.headerBox}>
						<h6> {theme.palette.mode}</h6>
						<IconButton sx={{ ml: 1 }} onClick={toggleDarkMode} color='inherit'>
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
					sx={{ minHeight: '40px' }}
					className={styles.headerToolbarMenu}
				>
					<NavMenu />
				</Toolbar>
			</Container>
		</AppBar>
	)
}
