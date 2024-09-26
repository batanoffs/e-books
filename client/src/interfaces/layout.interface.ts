export type MainLayoutProps = {
	children: Array<{
		id: string
		element: JSX.Element
	}>
}

export type DetailsLayoutProps = {
	header: JSX.Element
	aside: JSX.Element
	[key: string]: any
}

export type ProfileLayoutProps = {
	aside: JSX.Element
	[key: string]: any
}
