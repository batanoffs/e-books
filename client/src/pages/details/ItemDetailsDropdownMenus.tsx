import { ProductDetailsProps } from '../../interfaces/ProductDetailsProps.interface'
import CommentDropdown from './CommentDropdown'
import ReturnsDropdown from './ReturnsDropdown'
import DeliveryInfoDropdown from './DeliveryDropdown'
import DescriptionDropdown from './DescriptionDropdown'

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
	return (
		<div className={props.styles.dropdownContainer}>
			<DescriptionDropdown {...props} />
			<DeliveryInfoDropdown {...props} />
			<ReturnsDropdown {...props} />
			<CommentDropdown {...props} />
		</div>
	)
}
