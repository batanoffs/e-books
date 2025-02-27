import { useEffect, useState, useCallback } from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import { CardMedia, Grid, ListItemButton } from '@mui/material'
import Skeleton from '@mui/material/Skeleton'
import DeleteIcon from '@mui/icons-material/Delete'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import Paper from '@mui/material/Paper'

import useWishlistStore from '../../store/wishlist'
import cartService from '../../services/cartService'
import useCartStore from '../../store/cart'
import wishlistService from '../../services/wishlistService'
import formatCurrencyToBGN from '../../utils/helpers/formatCurrency'
import { ListIsEmpty } from '../../components/utils/ListIsEmpty'
import { useAlert } from '../../hooks/useAlert'

export const WishlistPage = () => {
	const [isRemoving, setIsRemoving] = useState(false)
	const [loading, setLoading] = useState(true)
	const wishlist = useWishlistStore((state) => state.wishlist)
	const setWishlist = useWishlistStore((state) => state.setWishlist)
	const { showAlert } = useAlert()
	const addToCart = useCartStore((state) => state.addToCart)

	const fetchWishlist = useCallback(async () => {
		try {
			const response = await wishlistService.getAll()
			const products = response.productRefs.map((product: any) => ({
				_id: product._id,
				picture: product.picture,
				title: product.title,
				price: product.price,
			}))

			setWishlist(products)
		} catch (error) {
			showAlert('Възникна грешка при зареждане на списъка', 'error')
		} finally {
			setLoading(false)
		}
	}, [setWishlist])

	useEffect(() => {
		fetchWishlist()
	}, [fetchWishlist])

	const handleAddToCart = async (productId: string) => {
		const product = wishlist.find((product) => product._id === productId)

		if (product) {
			await cartService.addOne(product._id, product.productType)
			addToCart(product, 1)
			showAlert('Успешно добавен продукт', 'success')
		} else {
			showAlert('Продуктът не е намерен', 'error')
		}
	}

	const removeFromWishlist = async (productId: string) => {
		setIsRemoving(true)
		try {
			await wishlistService.removeOne(productId)
			const updatedWishlist = wishlist.filter((current) => current._id !== productId)
			setWishlist(updatedWishlist)
		} catch (error) {
			showAlert('Възникна грешка', 'error')
		} finally {
			setIsRemoving(false)
			showAlert('Успешно премахнахте елемента от списъка', 'success')
		}
	}

	if (loading) {
		return (
			<Box sx={{ p: 3, maxWidth: 1000, marginLeft: 'auto', marginRight: 'auto' }}>
				<Paper>
					<List>
						{Array.from(new Array(3)).map((_, index) => (
							<ListItem key={index}>
								<ListItemAvatar sx={{ width: '10%', marginRight: 2 }}>
									<Skeleton variant='rectangular' width={60} height={90} />
								</ListItemAvatar>
								<ListItemText
									primary={<Skeleton variant='text' sx={{ width: '80%' }} />}
									secondary={<Skeleton variant='text' sx={{ width: '80%' }} />}
								/>
								<ListItemButton
									sx={{ display: 'flex', alignItems: 'center', mr: 2, gap: 2 }}
								>
									<Skeleton variant='rounded' sx={{ width: '40%' }} />
									<Skeleton variant='rounded' sx={{ width: '20%' }} />
								</ListItemButton>
							</ListItem>
						))}
					</List>
				</Paper>
			</Box>
		)
	}

	return (
		<Box sx={{ flexGrow: 1 }}>
			<Typography variant='h5' gutterBottom>
				Харесани продукти
			</Typography>
			{wishlist?.length === 0 ? (
				<ListIsEmpty />
			) : (
				<Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
					{wishlist?.map((product) => (
						<Paper
							key={product._id}
							elevation={1}
							sx={{
								padding: 2,
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
							}}
						>
							<Box sx={{ display: 'flex', alignItems: 'center' }}>
								<CardMedia
									component='img'
									image={product.picture}
									alt={product.title}
									sx={{
										width: 120,
										height: 120,
										marginRight: 2,
										objectFit: 'cover',
									}}
								/>
								<Box>
									<Typography variant='h6'>{product.title}</Typography>
									<Typography variant='body1' color='textPrimary'>
										Цена: {formatCurrencyToBGN(product.price)}
									</Typography>
								</Box>
							</Box>

							<Box sx={{ textAlign: 'right' }}>
								<Button
									variant='contained'
									color='warning'
									startIcon={<ShoppingCartIcon />}
									onClick={() => handleAddToCart(product._id)}
									sx={{ marginTop: 1 }}
								>
									Добави в количката
								</Button>
								<Button
									variant='outlined'
									color='secondary'
									onClick={() => removeFromWishlist(product._id)}
									sx={{ marginTop: 1, marginLeft: 1 }}
								>
									<DeleteIcon />
								</Button>
							</Box>
						</Paper>
					))}
				</Grid>
			)}
		</Box>
	)
}
