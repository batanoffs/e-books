import React, { useEffect, useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import Skeleton from '@mui/material/Skeleton'
import DeleteIcon from '@mui/icons-material/Delete'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

import useWishlistStore from '../../store/wishlist'
import useAlertStore from '../../store/alert'
import cartService from '../../services/cartService'
import useCartStore from '../../store/cart'
import wishlistService from '../../services/wishlistService'
import formatCurrencyToBGN from '../../utils/helpers/formatCurrency'

const WishlistPage = () => {
	const [isRemoving, setIsRemoving] = useState(false)
	const [loading, setLoading] = useState(true)
	const wishlist = useWishlistStore((state) => state.wishlist)
	const setWishlist = useWishlistStore((state) => state.setWishlist)
	const showAlert = useAlertStore((state) => state.showAlert)
	const addToCart = useCartStore((state) => state.addToCart)
	const navigate = useNavigate()

	const fetchWishlist = useCallback(async () => {
		try {
			const response = await wishlistService.getAll()
			const products = response.productRefs.map((product) => ({
				id: product.id,
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
		const product = wishlist.find((product) => product.id === productId)
		if (product) {
			await cartService.addOne(productId)
			addToCart(product)
			showAlert('Успешно добавен продукт', 'success')
		} else {
			showAlert('Продуктът не е намерен', 'error')
		}
	}

	const removeFromWishlist = async (productId: string) => {
		setIsRemoving(true)
		try {
			await wishlistService.removeOne(productId)
			const updatedWishlist = wishlist.filter((item) => item.id !== productId)
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
			<List>
				{Array.from(new Array(6)).map((_, index) => (
					<ListItem key={index}>
						<ListItemAvatar>
							<Skeleton variant='rectangular' width={60} height={60} />
						</ListItemAvatar>
						<ListItemText
							primary={<Skeleton variant='text' />}
							secondary={<Skeleton variant='text' />}
						/>
					</ListItem>
				))}
			</List>
		)
	}

	return (
		<Box sx={{ p: 3, width: '60%', marginLeft: 'auto', marginRight: 'auto' }}>
			{wishlist?.length === 0 ? (
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						height: '80vh',
						textAlign: 'center',
					}}
				>
					<Typography variant='h3' sx={{ mb: 2 }}>
						Няма добавени продукти в количката
					</Typography>
					<Typography variant='subtitle1'>
						Харесай продукт и той ще се появи тук
					</Typography>
					<Button
						variant='contained'
						onClick={() => navigate('/catalog')}
						color='primary'
						sx={{ mt: 4 }}
					>
						Обратно към каталога
					</Button>
				</Box>
			) : (
				<List>
					{wishlist?.map((product) => (
						<React.Fragment key={product.id}>
							<ListItem
								sx={{
									'&:hover': {
										backgroundColor: '#f9f9f9',
									},
								}}
							>
								<ListItemAvatar>
									<Avatar
										variant='square'
										src={product.picture}
										alt={product.title}
										sx={{ width: 60, height: 60, borderRadius: 1 }}
									/>
								</ListItemAvatar>
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
								<Box sx={{ display: 'flex', alignItems: 'center' }}>
									<Button
										variant='outlined'
										startIcon={<ShoppingCartIcon />}
										onClick={() => handleAddToCart(product.id)}
										sx={{ mr: 2 }}
									>
										Добави
									</Button>
									<Button
										variant='contained'
										color='error'
										startIcon={<DeleteIcon />}
										disabled={isRemoving}
										onClick={() => removeFromWishlist(product.id)}
									>
										Премахни
									</Button>
								</Box>
							</ListItem>
							<Divider />
						</React.Fragment>
					))}
				</List>
			)}
		</Box>
	)
}

export default WishlistPage
