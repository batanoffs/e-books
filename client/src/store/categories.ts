import { create } from 'zustand';

type CategoriesState = {
    category: string | null;
    filters: string[];
    setCategory: (category: string | null) => void;
    setFilters: (filters: string[]) => void;
};

export const useFiltersStore = create<CategoriesState>((set) => ({
    category: 'all',
    filters: [],
    setCategory: (category: string | null) => set({ category }),
    setFilters: (filters: string[]) => set({ filters }),
}));
