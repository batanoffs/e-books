import styles from './checkout.module.scss'
import Box from '@mui/material/Box'
import { DevTool } from '@hookform/devtools'

type propsType = {
	aside: JSX.Element
	[key: string]: any
}

export const CheckoutLayout = ({ children, aside, onSubmitForm, control }: propsType) => {
	return (
		<main className='main-wrapper'>
			<Box
				component='form'
				onSubmit={onSubmitForm}
				className={styles.checkoutContainer}
				noValidate
				autoComplete='off'
			>
				<article style={{ display: 'flex', gap: '5em' }}>{children}</article>
				<aside>{aside}</aside>
			</Box>
			<DevTool control={control}/>
		</main>
	)
}
