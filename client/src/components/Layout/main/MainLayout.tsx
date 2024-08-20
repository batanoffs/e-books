type MainLayoutProps = {
	children: Array<{
		id: string
		element: JSX.Element
	}>
}

const MainLayout = ({ children }: MainLayoutProps) => {
	return (
		<main className='main-wrapper'>
			{children &&
				children.map((child) => (
					<section key={child.id} style={{ marginBottom: '2em' }}>
						{child.element}
					</section>
				))}
		</main>
	)
}

export default MainLayout
