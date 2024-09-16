import { useEffect, useState, useCallback } from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import { ListItemButton } from '@mui/material'
import Skeleton from '@mui/material/Skeleton'
import DeleteIcon from '@mui/icons-material/Delete'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import Paper from '@mui/material/Paper'

import useWishlistStore from '../../store/wishlist'
import useAlertStore from '../../store/alert'
import cartService from '../../services/cartService'
import useCartStore from '../../store/cart'
import wishlistService from '../../services/wishlistService'
import formatCurrencyToBGN from '../../utils/helpers/formatCurrency'
import { ListIsEmpty } from '../../components/ListIsEmpty'

const WishlistPage = () => {
	const [isRemoving, setIsRemoving] = useState(false)
	const [loading, setLoading] = useState(true)
	const wishlist = useWishlistStore((state) => state.wishlist)
	const setWishlist = useWishlistStore((state) => state.setWishlist)
	const showAlert = useAlertStore((state) => state.showAlert)
	const addToCart = useCartStore((state) => state.addToCart)

	const fetchWishlist = useCallback(async () => {
		try {
			const response = await wishlistService.getAll()
			const products = response.productRefs.map((product) => ({
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
			await cartService.addOne(product._id)
			const data = {
				product,
				quantity: 1,
			}
			addToCart(data)
			showAlert('Успешно добавен продукт', 'success')
		} else {
			showAlert('Продуктът не е намерен', 'error')
		}
	}

	const removeFromWishlist = async (productId: string) => {
		setIsRemoving(true)
		try {
			await wishlistService.removeOne(productId)
			const updatedWishlist = wishlist.filter((item) => item._id !== productId)
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
		<Box sx={{ p: 3, maxWidth: 1000, marginLeft: 'auto', marginRight: 'auto' }}>
			{wishlist?.length === 0 ? (
				<ListIsEmpty />
			) : (
				<Paper
					sx={{
						width: '100%',
						minWidth: 400,
					}}
				>
					<List>
						{wishlist?.map((product) => (
							<ListItem
								key={product._id}
								sx={{
									'&:hover': { backgroundColor: 'white' },
								}}
							>
								<Box sx={{ width: '10%', marginRight: 2 }}>
									<img
										src={product.picture}
										alt={product.title}
										style={{ width: '80px' }}
									/>
								</Box>
								<ListItemText
									primary={
										<Typography variant='h6' sx={{ fontWeight: 'bold' }}>
											{product.title}
										</Typography>
									}
									secondary={
										<Typography variant='body2' color='text.secondary'>
											{formatCurrencyToBGN(product.price)}
										</Typography>
									}
								/>
								<Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
									<Button
										variant='outlined'
										startIcon={<ShoppingCartIcon />}
										onClick={() => handleAddToCart(product._id)}
										sx={{ mr: 1 }}
									>
										Добави
									</Button>
									<Button
										variant='contained'
										color='error'
										onClick={() => removeFromWishlist(product._id)}
										disabled={isRemoving}
									>
										<DeleteIcon />
									</Button>
								</Box>
							</ListItem>
						))}
					</List>
				</Paper>
			)}
		</Box>
	)
}

export default WishlistPage
