import { create } from 'zustand'

interface UserDataState {
	user: string | null
	isLoggedIn: boolean
	isAdmin: boolean
}

type UserDataAction = {
	setUser: (user: string | null) => void
	setIsLoggedIn: (isLoggedIn: boolean) => void
	setIsAdmin: (isAdmin: boolean) => void
}

export const useUserDataStore = create<UserDataState & UserDataAction>((set) => ({
	user: null,
	isLoggedIn: false,
	isAdmin: false,
	setUser: (user) => set({ user }),
	setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn }),
	setIsAdmin: (isAdmin) => set({ isAdmin }),
}))
