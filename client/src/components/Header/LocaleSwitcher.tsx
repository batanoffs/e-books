import { useLocaleThemeStore } from './siteTheme'

export const LocaleSwitcher = () => {
	const { locale, setLocale } = useLocaleThemeStore()
	return (
		<button onClick={() => setLocale(locale === 'enUS' ? 'bgBG' : 'enUS')}>
			Switch to {locale === 'enUS' ? 'Bulgarian' : 'English'}
		</button>
	)
}
