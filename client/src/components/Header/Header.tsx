import { Box, AppBar, Container, Toolbar } from '@mui/material'
import { NavMenu, SearchBar, LocaleSwitcher, AppBarItems } from './index'

import Logo from '../Logo/Logo'
import styles from './header.module.scss'

export const Header = () => {
	return (
		<AppBar position='static' sx={{ mb: '1em' }}>
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
