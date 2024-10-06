import { create } from 'zustand'

export type SupportedLocales = 'enUS' | 'bgBG'

export interface SiteThemeState {
	locale: SupportedLocales
	setLocale: (newLocale: SupportedLocales) => void
}

export const useLocalizationStore = create<SiteThemeState>((set) => {
	return {
		locale: 'enUS',
		setLocale: (newLocale) => set({ locale: newLocale }),
	}
})