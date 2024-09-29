import styles from './dashboard.module.scss'

type MainLayoutProps = {
	header: JSX.Element
	aside: JSX.Element
	[key: string]: any
}

//TODO improve dynamic pipelines for sidebar filters and header
const CatalogLayout = ({ children, header, aside }: MainLayoutProps) => {
	return (
		<main className='main-wrapper'>
			<header>{header}</header>
			<div className={styles.dashboardContainer}>
				<aside>{aside}</aside>
				<section>{children}</section>
			</div>
		</main>
	)
}

export default CatalogLayout
