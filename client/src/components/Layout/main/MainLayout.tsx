import { Box } from '@mui/material'
import { MainLayoutProps } from '../../../interfaces/layout.interface'

export const MainLayout = ({ children }: MainLayoutProps) => {
	return (
		<Box component='main' bgcolor={'background.default'} className='main-wrapper'>
			{children &&
				children.map((child) => (
					<section key={child.id} style={{ marginBottom: '2em' }}>
						{child.element}
					</section>
				))}
		</Box>
	)
}
