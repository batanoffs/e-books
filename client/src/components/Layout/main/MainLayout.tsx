type MainLayoutProps = {
	children: Array<{
		id: string
		element: JSX.Element
	}>
}

export const MainLayout = ({ children }: MainLayoutProps) => {
	return (
		<main className='main-wrapper'>
			{children &&
				children.map((child) => (
					<section key={child.id} style={{ padding: '0 60px', marginBottom: '2em' }}>
						{child.element}
					</section>
				))}
		</main>
	)
}
