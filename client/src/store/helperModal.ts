import { create } from 'zustand';

type State = {
    open: boolean;
};

type Action = {
    toggleOpen: () => void;
};

export const useLoginModal = create<State & Action>((set) => ({
    open: false,
    toggleOpen: () => set((state) => ({ open: !state.open })),
}));

export const useTermsModal = create<State & Action>((set) => ({
    open: false,
    toggleOpen: () => set((state) => ({ open: !state.open })),
}));

export const usePrivacyModal = create<State & Action>((set) => ({
    open: false,
    toggleOpen: () => set((state) => ({ open: !state.open })),
}));