import React, { useEffect, useState, useCallback } from 'react'
import axios from 'axios'

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

import { useWishlistStore } from '../../store/wishlist'
import { API } from '../../utils/constants/api'
import { useAlertStore } from '../../store/alert'
import { cartService } from '../../services/cartService'
import useCartStore from '../../store/cart'

const WishlistPage = () => {
	const { wishlist, setWishlist } = useWishlistStore((state) => ({
		wishlist: state.wishlist,
		setWishlist: state.setWishlist,
	}))
	const [isRemoving, setIsRemoving] = useState(false)
	const [loading, setLoading] = useState(true)
	const showAlert = useAlertStore((state) => state.showAlert)
	const addToCart = useCartStore((state) => state.addToCart)

	const fetchWishlist = useCallback(async () => {
		try {
			const response = await axios.get(API.WISHLIST, { withCredentials: true })
			const products = response.data.productRefs.map((item) => ({
				id: item._id,
				coverImagePath: item.product.coverImagePath,
				title: item.product.title,
				price: item.product.price,
			}))

			setWishlist(products)
		} catch (error) {
			console.error('Failed to fetch wishlist', error)
		} finally {
			setLoading(false)
		}
	}, [setWishlist])

	useEffect(() => {
		fetchWishlist()
	}, [fetchWishlist])

	const handleAddToCart = async (productId: string) => {
		//TODO fix issues
		// const product = wishlist.find((item) => item.id === productId)
		// const props = {
		// 	_id: productId,
		// }
		// if (product) {
		// 	await cartService.addToCart(props, 1, 'book')
		// 	const product = wishlist.find((item) => item._id === productId)
		// 	const response = await cartService.addToCart(productId, 1, 'book')
		// 	if (response) {
		// 		addToCart(product)
		// 		showAlert('Успешно добавен продукт', 'success')
		// 	} else {
		// 		showAlert('Възникна грешка', 'error')
		// 	}
		// }
	}

	const removeFromWishlist = async (productId: string) => {
		setIsRemoving(true)
		try {
			await axios.delete(API.WISHLIST + productId, { withCredentials: true })
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
						height: '100vh',
						textAlign: 'center',
					}}
				>
					<Typography variant='h4' sx={{ mb: 2 }}>
						Your Wishlist is Empty
					</Typography>
					<Typography variant='subtitle1'>
						Start adding products to your wishlist and they'll appear here.
					</Typography>
					<Button variant='contained' color='primary' sx={{ mt: 4 }}>
						Continue Shopping
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
