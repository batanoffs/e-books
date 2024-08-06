import styles from './checkout.module.scss'

type propsType = {
	aside: JSX.Element
	[key: string]: any
}

export const CheckoutLayout = ({ children, aside, ...props }: propsType) => {
	return (
		<main className='main-wrapper'>
			<section className={styles.checkoutContainer}>
				<article>
					<ol className='opc' id='checkoutSteps'>
						{children}
					</ol>
				</article>
				<aside>{aside}</aside>
			</section>
		</main>
	)
}
