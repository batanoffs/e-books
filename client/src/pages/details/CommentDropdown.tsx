import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

interface CommentDropdownProps {
	isCommentsOpen: boolean
	setIsCommentsOpen: (isCommentsOpen: boolean) => void
	styles: Record<string, string>
}

const CommentDropdown = ({ isCommentsOpen, setIsCommentsOpen, styles }: CommentDropdownProps) => {
	const handleClick = () => setIsCommentsOpen(!isCommentsOpen)
	const message = isCommentsOpen ? 'Няма налични коментари все още за този продукт.' : ''
	
	return (
		<div className={styles.dropdown} onClick={handleClick}>
			<h3>
				Коментари
				{isCommentsOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
			</h3>
			{isCommentsOpen && <p>{message}</p>}
		</div>
	)
}

export default CommentDropdown
