import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import { SvgIconOwnProps } from '@mui/material'

interface PaymentOptionProps {
	text: string
	styles: { [key: string]: string }
	icon: SvgIconOwnProps
}

const PaymentOption = ({ text, styles, icon: Icon }: PaymentOptionProps) => (
	<span className={styles.pageFooterIconsText}>
		<Icon className={styles.icon} />
		<span> {text} </span>
	</span>
)

interface PaymentIconProps {
	alt: string
	styles: { [key: string]: string }
	imgUrl: string
}

const PaymentIcon = ({ alt, styles, imgUrl }: PaymentIconProps) => (
	<li className={styles.pageFooterIconsItem}>
		<img src={imgUrl} alt={alt} loading='lazy' />
	</li>
)

const PaymentOptions = ({ styles }: { styles: { [key: string]: string } }) => (
	<div className={styles.pageFooterMidBlock}>
		<div className={styles.pageFooterMidBlockItem}>
			<div className={`${styles.pageFooterIcons} ${styles.pageFooterIconsPayments}`}>
				<PaymentOption icon={AccountBalanceIcon} styles={styles} text='Банков превод' />
				<PaymentOption
					icon={AccountBalanceWalletIcon}
					styles={styles}
					text='Наложен платеж'
				/>
			</div>
		</div>
		<div className={styles.pageFooterMidBlockItem}>
			<ul className={`${styles.pageFooterIcons} ${styles.pageFooterIconsPayments}`}>
				<PaymentIcon styles={styles} imgUrl='/visa.png' alt='Visa' />
				<PaymentIcon styles={styles} imgUrl='/mastercard.png' alt='Mastercard' />
				<PaymentIcon styles={styles} imgUrl='/easypaysmall.png' alt='Easypay' />
				<PaymentIcon styles={styles} imgUrl='/epay.png' alt='Epay.bg' />
				<PaymentIcon styles={styles} imgUrl='/paypal.png' alt='Paypal' />
			</ul>
		</div>
	</div>
)

export default PaymentOptions
