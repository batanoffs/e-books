// AuthContentComponent.tsx
import { UserMenu } from './UserMenu'
import { useLoginModal } from '../../store/helperModal'
import { Button } from '@mui/material'
import authGuards from '../../middlewares/guards'
import { CartDropdownButton } from './CartDropdownButton'

const LoginBtn = () => {
	const toggleOpen = useLoginModal((state) => state.toggleOpen)
	return (
		<Button
			sx={{ borderRadius: '0.5em' }}
			variant='contained'
			color='primary'
			onClick={toggleOpen}
		>
			Вход
		</Button>
	)
}

export const AppBarItems = () => {
	const isUserAuthenticated = authGuards.isAuth()

	return isUserAuthenticated ? (
		<>
			<UserMenu />
			<CartDropdownButton />
		</>
	) : (
		<LoginBtn />
	)
}
