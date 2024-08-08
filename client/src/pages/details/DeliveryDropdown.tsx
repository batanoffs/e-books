import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

interface DeliveryInfoDropdownProps {
	isDeliveryInfoOpen: boolean
	setIsDeliveryInfoOpen: (isDeliveryInfoOpen: boolean) => void
	styles: Record<string, string>
}

const DeliveryInfoDropdown = ({
	isDeliveryInfoOpen,
	setIsDeliveryInfoOpen,
	styles,
}: DeliveryInfoDropdownProps) => {
	return (
		<div className={styles.dropdown} onClick={() => setIsDeliveryInfoOpen(!isDeliveryInfoOpen)}>
			<h5>
				Информация за доставка
				{isDeliveryInfoOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
			</h5>
			{isDeliveryInfoOpen && (
				<div>
					<p>Доставката обикновено трае между 3 и 5 работни дни.</p>
					<p>Цена за доставка: 5лв</p>
					<p>Безплатна доставка при поръчка над 49.80 лв.</p>
				</div>
			)}
		</div>
	)
}

export default DeliveryInfoDropdown
