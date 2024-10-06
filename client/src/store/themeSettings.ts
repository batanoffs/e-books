import { create } from 'zustand'

export type SupportedLocales = 'enUS' | 'bgBG'
export type PaletteMode = 'light' | 'dark'

export interface SiteThemeState {
	locale: SupportedLocales
	setLocale: (newLocale: SupportedLocales) => void
	darkMode: PaletteMode
	toggleDarkMode: () => void
}

export const useThemeSettings = create<SiteThemeState>((set) => {
	return {
		locale: 'enUS',
		setLocale: (newLocale) => set({ locale: newLocale }),
		darkMode: 'light',
		toggleDarkMode: () => set((state) => ({
			darkMode: state.darkMode === 'light' ? 'dark' : 'light',
		})),
	}
})

