import { useState } from 'react'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'

import styles from './quantityInput.module.scss'

interface QuantityInputProps {
	setQuantity: (quantity: number) => void
	quantity: number
}

const QuantityInput = ({ quantity, setQuantity }: QuantityInputProps) => {
	const [localQuantity, setLocalQuantity] = useState(quantity)

	const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newQuantity = Number(event.target.value)
		setLocalQuantity(newQuantity)
	}

	const handleDecreaseQuantity = () => {
		if (localQuantity > 1) {
			setLocalQuantity((prevQuantity) => prevQuantity - 1)
		}
	}

	const handleIncreaseQuantity = () => {
		if (localQuantity < 9999) {
			setLocalQuantity((prevQuantity) => prevQuantity + 1)
		}
	}

	const handleSubmit = () => {
		setQuantity(localQuantity)
	}

	return (
		<div className={styles.counterContainer}>
			<InputAdornment position='start'>
				<IconButton onClick={handleDecreaseQuantity} disabled={localQuantity === 1}>
					<RemoveIcon />
				</IconButton>
				<TextField
					type='text'
					inputMode='numeric'
					name='qty'
					id='qty'
					inputProps={{ min: 1, max: 9999, step: 1 }}
					value={localQuantity}
					className={styles.cartInput}
					onChange={handleQuantityChange}
					onBlur={handleSubmit}
				/>
				<IconButton onClick={handleIncreaseQuantity} disabled={localQuantity === 9999}>
					<AddIcon />
				</IconButton>
			</InputAdornment>
		</div>
	)
}

export default QuantityInput
