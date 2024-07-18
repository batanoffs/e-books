import { create } from 'zustand';

type CategoriesState = {
    navCategory: string | null;
    bookCategories: string[];
    textbookCategories: string[];
    stationeriesCategories: string[];
    filters: string[];
    setNavCategory: (category: string | null) => void;
    setFilters: (filters: string[]) => void;
    setBookCategories: (categories: string[]) => void;
    setTextbookCategories: (categories: string[]) => void;
    setStationeriesCategories: (categories: string[]) => void;
};

export const useFiltersStore = create<CategoriesState>((set) => ({
    navCategory: 'all',
    bookCategories: [],
    textbookCategories: [],
    stationeriesCategories: [],
    filters: [],
    setBookCategories: (bookCategories: string[]) => set({ bookCategories }),
    setTextbookCategories: (textbookCategories: string[]) => set({ textbookCategories }),
    setStationeriesCategories: (itemCategories: string[]) => set({ itemCategories }),
    setNavCategory: (navCategory: string | null) => set({ navCategory }),
    setFilters: (filters: string[]) => set({ filters }),
}));
