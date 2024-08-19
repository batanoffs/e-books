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

const WishlistPage = () => {
	const { wishlist, setWishlist } = useWishlistStore((state) => ({
		wishlist: state.wishlist,
		setWishlist: state.setWishlist,
	}))
	const [isRemoving, setIsRemoving] = useState(false)
	const [loading, setLoading] = useState(true)
	const showAlert = useAlertStore((state) => state.showAlert)
	const addToCart = useCartStore((state) => state.addToCart)
	const navigate = useNavigate()

	const fetchWishlist = useCallback(async () => {
		try {
			const response = await wishlistService.getAll()
			const products = response.productRefs.map((item) => ({
				id: item._id,
				coverImagePath: item.product.coverImagePath,
				title: item.product.title,
				price: item.product.price,
			}))

			setWishlist(products)
		} catch (error) {
			console.error('Failed to fetch wishlist', error)
			showAlert('Възникна грешка при зареждане на списъка', 'error')
		} finally {
			setLoading(false)
		}
	}, [setWishlist])

	useEffect(() => {
		fetchWishlist()
	}, [fetchWishlist])

	const handleAddToCart = async (productId: string) => {
		// TODO fix issues
		const product = wishlist.find((item) => item.id === productId)
		if (product) {
			await cartService.addOne(productId)
			addToCart(product)
			showAlert('Успешно добавен продукт', 'success')
		}
		showAlert('Продуктът не е намерен', 'error')
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
					{wishlist?.map((item) => (
						<React.Fragment key={item.id}>
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
										src={item.coverImagePath}
										alt={item.title}
										sx={{ width: 60, height: 60, borderRadius: 1 }}
									/>
								</ListItemAvatar>
								<ListItemText
									primary={
										<Typography variant='h6' sx={{ fontWeight: 'bold' }}>
											{item.title}
										</Typography>
									}
									secondary={
										<Typography variant='body2' color='text.secondary'>
											${item.price}
										</Typography>
									}
								/>
								<Box sx={{ display: 'flex', alignItems: 'center' }}>
									<Button
										variant='outlined'
										startIcon={<ShoppingCartIcon />}
										onClick={() => handleAddToCart(item.id)}
										sx={{ mr: 2 }}
									>
										Добави
									</Button>
									<Button
										variant='contained'
										color='error'
										startIcon={<DeleteIcon />}
										disabled={isRemoving}
										onClick={() => removeFromWishlist(item.id)}
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
