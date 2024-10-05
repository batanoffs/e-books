// AuthContentComponent.tsx
import { UserMenu } from './UserMenu'
import { useLoginModal } from '../../store/helperModal'
import { Button } from '@mui/material'
import authGuards from '../../middlewares/guards'
import { CartDropdown } from './CartButton'

const LoginBtn = () => {
	const toggleOpen = useLoginModal((state) => state.toggleOpen)
	return (
		<Button
			sx={{ borderRadius: '0.5em' }}
			variant='contained'
			color='secondary'
			onClick={toggleOpen}
		>
			Вход
		</Button>
	)
}

const AppBarItems = () => {
	const isUserAuthenticated = authGuards.isAuth()

	return isUserAuthenticated ? (
		<>
			<UserMenu />
			<CartDropdown />
		</>
	) : (
		<LoginBtn />
	)
}

export default AppBarItems
