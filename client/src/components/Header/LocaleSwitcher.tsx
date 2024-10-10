import { Button } from '@mui/material'
import { useThemeSettings } from '../../store/themeSettings'
import { countryFlags } from '../utils/countryFlags'

export const LocaleSwitcher = () => {
	const { locale, setLocale } = useThemeSettings()
	return (
		<Button
			variant='outlined'
			color='primary'
			sx={{
				m: 0,
				p: 0,
				minWidth: '80px',
				border: '1px solid',
				borderColor: 'primary.main',
				borderRadius: 1.5,
			}}
			onClick={() => setLocale(locale === 'enUS' ? 'bgBG' : 'enUS')}
			startIcon={locale === 'enUS' ? countryFlags.bgBG : countryFlags.enUS}
		>
			{locale === 'enUS' ? 'BG' : 'EN'}
		</Button>
	)
}
