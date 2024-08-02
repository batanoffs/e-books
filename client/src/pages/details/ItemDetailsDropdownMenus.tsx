import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { ProductDetailsProps } from '../../interfaces/ProductDetailsProps.interface'

interface ItemDetailsDropdownMenus extends ProductDetailsProps {
	isDescriptionOpen: boolean
	setIsDescriptionOpen: React.Dispatch<React.SetStateAction<boolean>>
	isDeliveryInfoOpen: boolean
	setIsDeliveryInfoOpen: React.Dispatch<React.SetStateAction<boolean>>
	isReturnsOpen: boolean
	setIsReturnsOpen: React.Dispatch<React.SetStateAction<boolean>>
	isCommentsOpen: boolean
	setIsCommentsOpen: React.Dispatch<React.SetStateAction<boolean>>
	styles: Record<string, string>
}
export const ItemDetailsDropdownMenus = (props: ItemDetailsDropdownMenus) => {
	const {
		styles,
		isDescriptionOpen,
		setIsDescriptionOpen,
		isDeliveryInfoOpen,
		setIsDeliveryInfoOpen,
		isReturnsOpen,
		setIsReturnsOpen,
		isCommentsOpen,
		setIsCommentsOpen,
		author,
		publisher,
		translator,
		sku,
		isbn,
		language,
		publishDate,
		pageCount,
		dimensions,
		coverPageType,
		description,
		deliveryPrice,
	} = props

	return (
		<div className={styles.dropdownContainer}>
			<div
				className={styles.dropdown}
				onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
			>
				<h3>
					Описание
					{isDescriptionOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
				</h3>
				{isDescriptionOpen && (
					<div>
						<div className={styles.metaData}>
							<div className={styles.col}>
								<p>
									<strong>Автор:</strong> {author}
								</p>
								<p>
									<strong>Издателство:</strong> {publisher}
								</p>
								<p>
									<strong>Преводач:</strong> {translator}
								</p>
								<p>
									<strong>SKU:</strong> {sku}
								</p>

								<p>
									<strong>ISBN:</strong> {isbn}
								</p>
							</div>
							<div className={styles.col}>
								<p>
									<strong>Език:</strong> {language}
								</p>
								<p>
									<strong>Година на издаване:</strong> {publishDate}
								</p>
								<p>
									<strong>Страници брой:</strong> {pageCount}
								</p>
								<p>
									<strong>Размер см:</strong> {dimensions}
								</p>
								<p>
									<strong>Вид корица:</strong> {coverPageType}
								</p>
							</div>
						</div>
						<p>{description}</p>
					</div>
				)}
			</div>
			<div
				className={styles.dropdown}
				onClick={() => setIsDeliveryInfoOpen(!isDeliveryInfoOpen)}
			>
				<h3>
					Информация за доставка
					{isDeliveryInfoOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
				</h3>
				{isDeliveryInfoOpen && (
					<div>
						<p>Доставката обикновено трае между 3 и 5 работни дни.</p>
						<p>Цена за доставка: {deliveryPrice}</p>
						<p>Безплатна доставка при поръчка над 49.80 лв.</p>
					</div>
				)}
			</div>
			<div className={styles.dropdown} onClick={() => setIsReturnsOpen(!isReturnsOpen)}>
				<h3>
					Връщане
					{isReturnsOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
				</h3>
				{isReturnsOpen && (
					<p>
						Връщане може да се применява само при първото поръчване на книга. То може да
						се осъществи в рамките на 30 дни след първото поръчване.
					</p>
				)}
			</div>
			<div className={styles.dropdown} onClick={() => setIsCommentsOpen(!isCommentsOpen)}>
				<h3>
					Коментари
					{isCommentsOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
				</h3>
				{isCommentsOpen && <p>Няма налични коментари все още за този продукт.</p>}
			</div>
		</div>
	)
}
