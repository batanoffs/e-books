import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

interface ReturnsDropdownProps {
	styles: Record<string, string>
	isReturnsOpen: boolean
	setIsReturnsOpen: (isReturnsOpen: boolean) => void
}

const ReturnsDropdown = ({ styles, isReturnsOpen, setIsReturnsOpen }: ReturnsDropdownProps) => {
	return (
		<div className={styles.dropdown} onClick={() => setIsReturnsOpen(!isReturnsOpen)}>
			<h3>
				Връщане
				{isReturnsOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
			</h3>
			{isReturnsOpen && (
				<p>
					Връщане може да се применява само при първото поръчване на книга. То може да се
					осъществи в рамките на 30 дни след първото поръчване.
				</p>
			)}
		</div>
	)
}

export default ReturnsDropdown
