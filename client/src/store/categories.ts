import { create } from 'zustand';

type CategoriesState = {
    category: string | null;
    categories: string[];
    filters: string[];
    setCategory: (category: string | null) => void;
    setFilters: (filters: string[]) => void;
    setCategories: (categories: string[]) => void;
};

export const useFiltersStore = create<CategoriesState>((set) => ({
    category: 'all',
    categories: [],
    filters: [],
    setCategories: (categories: string[]) => set({ categories }),
    setCategory: (category: string | null) => set({ category }),
    setFilters: (filters: string[]) => set({ filters }),
}));
