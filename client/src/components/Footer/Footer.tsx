import { FooterBot, FooterMidSection as FooterMid, FooterTop, Newsletter } from './index'

const Footer = () => {
	return (
		<footer>
			{!window.location.pathname.includes('/register') &&
				!window.location.pathname.includes('/checkout') &&
				!window.location.pathname.includes('/cart') &&
				!window.location.pathname.includes('/admin') && <Newsletter />}
			<FooterTop />
			<FooterMid />
			<FooterBot />
		</footer>
	)
}

export default Footer
