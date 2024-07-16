import create from 'zustand';

type CategoriesState = {
    categories: string[];
    filters: string[];
    setCategories: (categories: string[]) => void;
    setFilters: (filters: string[]) => void;
};

export const useCategoriesStore = create<CategoriesState>((set) => ({
    categories: [],
    filters: [],
    setCategories: (categories: string[]) => set({ categories }),
    setFilters: (filters: string[]) => set({ filters }),
}));
