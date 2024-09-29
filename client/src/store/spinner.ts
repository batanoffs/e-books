// src/store/useSpinnerStore.ts
import { create } from 'zustand'

interface SpinnerState {
	isLoading: boolean
	showSpinner: () => void
	hideSpinner: () => void
}

const useSpinner = create<SpinnerState>((set) => ({
	isLoading: false,
	showSpinner: () => set({ isLoading: true }),
	hideSpinner: () => set({ isLoading: false }),
}))

export default useSpinner
