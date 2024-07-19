//TODO improve this logic in the future

import { create } from 'zustand';

type LocationState = {
    location: string | null;
    updateLocation: (newLocation: Location) => void;
};

export const useLocationStore = create<LocationState>((set) => ({
    location: window.location.pathname,
    updateLocation: (newLocation) => set({ location: newLocation }),
}));
