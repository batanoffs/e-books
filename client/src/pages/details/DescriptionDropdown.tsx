import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { ProductDetailsProps } from '../../interfaces/ProductDetailsProps.interface'
import { formatDate } from '../../utils/helpers/formatDate'

interface DescriptionDropdownProps extends ProductDetailsProps {
	setIsDescriptionOpen: (isDescriptionOpen: boolean) => void
	isDescriptionOpen: boolean
	styles: Record<string, string>
}

const DescriptionDropdown = ({
	isDescriptionOpen,
	setIsDescriptionOpen,
	styles,
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
								<strong>Година на издаване:</strong>{' '}
								{formatDate(publishDate)}
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
	)
}

export default DescriptionDropdown

{
	/* <div className={styles.dropdown} onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}>
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
						<strong>Година на издаване:</strong> {new Date(publishDate).getFullYear()}
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
</div> */
}
