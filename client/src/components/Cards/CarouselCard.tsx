import Button from '@mui/material/Button'

import formatCurrencyToBGN from '../../utils/helpers/formatCurrency'

interface CarouselCard {
	book: {
		_id: string
		title: string
		author: string
		coverImagePath: string
		description: string
		price: number
		category: string
		stock: number
	}
	styles: Record<string, string>
}

export const CarouselCard = ({ book, styles }: CarouselCard) => {
	const { coverImagePath, title, author, price, description, _id } = book
	const formatCurrency = formatCurrencyToBGN(price)
	return (
		<div className={styles.container}>
			<div className={styles.textContainer}>
				<h1>{title}</h1>
				<p>{author}</p>
				<p>{formatCurrency}</p>
				<span>{description}</span>
				<div className={styles.buttonsContainer}>
					<Button variant='contained' color='secondary' className={styles.button}>
						Купи
					</Button>
					<Button variant='contained' className={styles.button} href={`/books/${_id}`}>
						Виж детайли
					</Button>
				</div>
			</div>
			<div>
				<img className={styles.image} src={coverImagePath} alt={title} />
			</div>
		</div>
	)
}
