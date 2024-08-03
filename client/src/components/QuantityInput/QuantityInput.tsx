import IndeterminateCheckBoxOutlinedIcon from '@mui/icons-material/IndeterminateCheckBoxOutlined'
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined'

import styles from './quantityInput.module.scss'

interface QuantityInputProps {
	setQuantity: (quantity: number) => void
	quantity: number
}

const QuantityInput = ({ quantity, setQuantity }: QuantityInputProps) => {
	const decreaseQuantity = () => {
		if (quantity > 1) {
			setQuantity((prevQuantity) => prevQuantity - 1)
		}
	}

	const increaseQuantity = () => {
		if (quantity < 9999) {
			setQuantity((prevQuantity) => prevQuantity + 1)
		}
	}

	return (
		<div className={styles.counterContainer}>
			<label htmlFor='qty' className={styles.visuallyhidden}>
				Количество:
			</label>
			<button
				type='button'
				className={styles.counterButton}
				disabled={quantity === 1}
				aria-label='Decrease quantity'
				onClick={decreaseQuantity}
			>
				<IndeterminateCheckBoxOutlinedIcon />
			</button>

			<input
				type='number'
				name='qty'
				id='qty'
				min={1}
				max={9999}
				step={1}
				value={quantity}
				className={styles.cartInput}
				data-validate={JSON.stringify({
					'required-number': true,
					'validate-item-quantity': {
						minAllowed: 1,
						maxAllowed: 10000,
					},
				})}
				onChange={(event) => setQuantity(Number(event.target.value))}
				style={{ appearance: 'textfield' }}
			/>
			<button
				type='button'
				className={styles.counterButton}
				aria-label='Increase quantity'
				onClick={increaseQuantity}
			>
				<AddBoxOutlinedIcon />
			</button>
		</div>
	)
}

export default QuantityInput
