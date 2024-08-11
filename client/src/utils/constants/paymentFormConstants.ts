export const regionOptions = [
	{ value: '', label: 'Моля изберете регион.' },
	{ value: '588', label: 'Благоевград' },
	{ value: '589', label: 'Бургас' },
	{ value: '595', label: 'Добрич' },
	{ value: '594', label: 'Габрово' },
	{ value: '613', label: 'Хасково' },
	{ value: '596', label: 'Кърджали' },
	{ value: '597', label: 'Кюстендил' },
	{ value: '598', label: 'Ловеч' },
	{ value: '599', label: 'Монтана' },
	{ value: '600', label: 'Пазарджик' },
	{ value: '601', label: 'Перник' },
	{ value: '602', label: 'Плевен' },
	{ value: '603', label: 'Пловдив' },
	{ value: '604', label: 'Разград' },
	{ value: '605', label: 'Русе' },
	{ value: '614', label: 'Шумен' },
	{ value: '606', label: 'Силистра' },
	{ value: '607', label: 'Сливен' },
	{ value: '608', label: 'Смолян' },
	{ value: '609', label: 'София' },
	{ value: '610', label: 'Софийска област' },
	{ value: '611', label: 'Стара Загора' },
	{ value: '612', label: 'Търговище' },
	{ value: '590', label: 'Варна' },
	{ value: '591', label: 'Велико Търново' },
	{ value: '592', label: 'Видин' },
	{ value: '593', label: 'Враца' },
	{ value: '615', label: 'Ямбол' },
]

export const paymentOptions = [
	{
		value: 'cash',
		provider: 'чрез Econt или Speedy',
		method: 'Наложен платеж',
	},
	{
		value: 'bank',
		provider: 'dsk',
		method: 'Банков превод',
	},
	{
		value: 'EasyPay',
		provider: 'EasyPay',
		method: 'онлайн плащане',
	},

	{
		value: 'Epay',
		provider: 'Epay',
		method: 'онлайн плащане',
	},
	{
		value: 'card',
		provider: 'Visa Master Card',
		method: 'онлайн плащане',
	},
]

export const deliveryOptions = [
	// {
	// 	value: 'boxnow',
	// 	price: '3.99 лв.',
	// 	provider: 'BoxNow',
	// 	method: 'BoxNow',
	// },
	{
		value: 'econt',
		price: '5.99 лв.',
		provider: 'Econt Express',
		method: 'до офис или EcontATM 24/7',
	},
	{
		value: 'speedy',
		price: '5.99 лв.',
		provider: 'Speedy',
		method: 'до офис',
	},
]
