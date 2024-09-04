import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

import ProductDetailsProps from '../../interfaces/ProductDetailsProps.interface'
import formatDate from '../../utils/helpers/formatDate'
import { Product } from '../../interfaces/product.interface'

interface DescriptionDropdownProps extends ProductDetailsProps {
	setIsDescriptionOpen: (isDescriptionOpen: boolean) => void
	isDescriptionOpen: boolean
	styles: Record<string, string>
	product: Product
}

const DescriptionDropdown = ({
	setIsDescriptionOpen,
	isDescriptionOpen,
	styles,
	product,
}: DescriptionDropdownProps) => {
	return (
		<div className={styles.dropdown} onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}>
			<h5>
				Описание
				{isDescriptionOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
			</h5>
			{isDescriptionOpen && (
				<div>
					<div className={styles.metaData}>
						<div className={styles.col}>
							<p>
								<strong>Автор:</strong> {product.author}
							</p>
							<p>
								<strong>Издателство:</strong> {product.publisher}
							</p>
							<p>
								<strong>Преводач:</strong> {product.translator}
							</p>
							<p>
								<strong>SKU:</strong> {product.sku}
							</p>

							<p>
								<strong>ISBN:</strong> {product.isbn}
							</p>
						</div>
						<div className={styles.col}>
							<p>
								<strong>Език:</strong> {product.language}
							</p>
							<p>
								<strong>Година на издаване:</strong>{' '}
								{formatDate(product.publishDate)}
							</p>
							<p>
								<strong>Страници брой:</strong> {product.pageCount}
							</p>
							<p>
								<strong>Размер см:</strong> {product.dimensions}
							</p>
							<p>
								<strong>Вид корица:</strong> {product.coverPageType}
							</p>
						</div>
					</div>
					<p>{product.description}</p>
				</div>
			)}
		</div>
	)
}

export default DescriptionDropdown
