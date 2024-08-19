import styles from './cart.module.scss'

type CartLayoutProps = {
	children: JSX.Element
	header: JSX.Element
	aside: JSX.Element
	[key: string]: any
}

const CartLayout = ({ children, header, aside, ...props }: CartLayoutProps) => {
	return (
		<main className='main-wrapper'>
			{header && <header>{header}</header>}
			<section className={styles.cartContainer}>
				<article>{children}</article>
				<aside>{aside}</aside>
			</section>
		</main>
	)
}
export default CartLayout