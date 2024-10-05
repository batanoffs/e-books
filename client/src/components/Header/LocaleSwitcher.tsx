import { Button } from '@mui/material'
import { useLocalizationStore } from '../../store/localization'
import { countryFlags } from '../utils/countryFlags'

export const LocaleSwitcher = () => {
	const { locale, setLocale } = useLocalizationStore()
	return (
		<Button
			variant='outlined'
			color='inherit'
			sx={{ m: 0, p: 0, minWidth: '80px', border: '1px solid darkgray', borderRadius: 0.5 }}
			onClick={() => setLocale(locale === 'enUS' ? 'bgBG' : 'enUS')}
			startIcon={locale === 'enUS' ? countryFlags.bgBG : countryFlags.enUS}
		>
			{locale === 'enUS' ? 'BG' : 'EN'}
		</Button>
	)
}
