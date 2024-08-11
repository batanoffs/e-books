import styles from './checkout.module.scss'
import Box from '@mui/material/Box'

type propsType = {
	aside: JSX.Element
	[key: string]: any
}

export const CheckoutLayout = ({ children, aside, onSubmitForm }: propsType) => {
	return (
		<main className='main-wrapper'>
			<Box
				component='form'
				onSubmit={onSubmitForm}
				className={styles.checkoutContainer}
				noValidate
				autoComplete='off'
			>
				<article>{children}</article>
				<aside>{aside}</aside>
			</Box>
		</main>
	)
}
