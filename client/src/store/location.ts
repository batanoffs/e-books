//TODO improve this logic in the future

import { create } from 'zustand';

type LocationState = {
    location: string | null; //Location
    updateLocation: (newLocation: string) => void; //Location
};

export const useLocationStore = create<LocationState>((set) => ({
    location: window.location.pathname,
    updateLocation: (newLocation) => set({ location: newLocation }),
}));
