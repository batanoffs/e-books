import { Box, AppBar, Container, Toolbar } from '@mui/material'

import Logo from '../Logo/Logo'
import SearchBar from './SearchBar'
import NavigationMenu from './NavMenu'
import { LocaleSwitcher } from './LocaleSwitcher'
import AppBarItems from './AppBarItems'
import styles from './header.module.scss'

const Header = () => {
	return (
		<AppBar position='static'>
			<Container maxWidth='xl'>
				<Toolbar className={styles.headerToolbar} variant='dense'>
					<Logo />
					<SearchBar />
					<Box className={styles.headerBox}>
						<AppBarItems />
						<LocaleSwitcher />
					</Box>
				</Toolbar>
				<Toolbar variant='dense' className={styles.headerToolbarMenu}>
					<NavigationMenu />
				</Toolbar>
			</Container>
		</AppBar>
	)
}

export default Header
