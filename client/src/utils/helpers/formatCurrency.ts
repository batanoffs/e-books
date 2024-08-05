export default function formatCurrencyToBGN(amount: number) {
	return new Intl.NumberFormat('bg-BG', {
		style: 'currency',
		currency: 'BGN',
	}).format(amount)
}
