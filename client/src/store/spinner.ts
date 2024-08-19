import { create } from 'zustand'

type SpinnerState = {
	isLoading: boolean
}

type SpinnerAction = {
	toggleLoading: () => void
}

const useSpinner = create<SpinnerState & SpinnerAction>((set) => ({
	isLoading: false,
	toggleLoading: () => set((state) => ({ isLoading: !state.isLoading })),
}))

export default useSpinner
