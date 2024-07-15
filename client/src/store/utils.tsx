import { create } from 'zustand';

type SpinnerState = {
  isLoading: boolean;
};

type SpinnerAction = {
  toggleLoading: () => void;
};

export const useSpinner = create<SpinnerState & SpinnerAction>((set) => ({
  isLoading: false,
  toggleLoading: () => set((state) => ({ isLoading: !state.isLoading })),
}));

