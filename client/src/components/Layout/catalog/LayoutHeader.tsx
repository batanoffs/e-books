import { Box, Typography, Breadcrumbs, Link } from '@mui/material'

import { useNavigate } from 'react-router-dom'
import useFiltersStore from '../../../store/filters'

import styles from './header.module.scss'

type LayoutHeaderProps = {
	title: string
	productType: string | null
	productTypeBG: string | null
	productCategory?: string | null
	hasSorting?: boolean
	resultCount?: number
}

export const LayoutHeader = ({
	title,
	productType,
	productTypeBG,
	hasSorting,
	resultCount,
}: LayoutHeaderProps) => {
	const navigate = useNavigate()
	const { productCategory, setProductCategory } = useFiltersStore()

	const handleNavigateCategory = () => {
		navigate(`/catalog/${productType}`)
	}
	return (
		<Box className={styles.container}>
			<Breadcrumbs
				separator='/'
				color='text.primary'
				sx={{ cursor: 'pointer' }}
				className={styles.navigation}
			>
				<Link underline='hover' color='inherit' onClick={() => navigate('/')}>
					книжарница
				</Link>
				<Link
					underline='hover'
					color='inherit'
					onClick={() => navigate(`/catalog/${productType}`)}
				>
					{productTypeBG}
				</Link>
				{productCategory && (
					<Link underline='hover' color='inherit' onClick={handleNavigateCategory}>
						{productCategory}
					</Link>
				)}
				{title && <Typography color='text.primary'>{title}</Typography>}
			</Breadcrumbs>
			{!title && (
				<Typography variant='h4' textAlign={'center'} color={'text.secondary'}>
					{productCategory}
				</Typography>
			)}

			{hasSorting && (
				<div className={styles.sorting}>
					<p>Резултата: {resultCount ? resultCount : 'Няма намерени'}</p>
					<div className={styles.sortContainer}>
						<p>Сортирай по:</p>
						<select name='sort' id='sort'>
							<option value='low-price'>Цена: намаляващ</option>
							<option value='high-price'>Цена: нарастващ</option>
						</select>
					</div>

					<div className={styles.itemsPerPageContainer}>
						<p>Покажи по:</p>
						<select name='itemsPerPage' id='itemsPerPage'>
							<option value='10'>10</option>
							<option value='20'>20</option>
							<option value='50'>50</option>
						</select>
					</div>
				</div>
			)}
		</Box>
	)
}
