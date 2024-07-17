import { create } from 'zustand';

type CategoriesState = {
    navCategory: string | null;
    bookCategories: string[];
    textbookCategories: string[];
    itemCategories: string[];
    filters: string[];
    setNavCategory: (category: string | null) => void;
    setFilters: (filters: string[]) => void;
    setBookCategories: (categories: string[]) => void;
    setTextbookCategories: (categories: string[]) => void;
    setItemCategories: (categories: string[]) => void;
};

export const useFiltersStore = create<CategoriesState>((set) => ({
    navCategory: 'all',
    bookCategories: [],
    textbookCategories: [],
    itemCategories: [],
    filters: [],
    setBookCategories: (bookCategories: string[]) => set({ bookCategories }),
    setTextbookCategories: (textbookCategories: string[]) => set({ textbookCategories }),
    setItemCategories: (itemCategories: string[]) => set({ itemCategories }),
    setNavCategory: (navCategory: string | null) => set({ navCategory }),
    setFilters: (filters: string[]) => set({ filters }),
}));
