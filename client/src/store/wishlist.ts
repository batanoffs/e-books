import { create } from 'zustand'

interface WishlistState {
	wishlist: any[]
	setWishlist: (wishlist: any[]) => void
}

const useWishlistStore = create<WishlistState>((set) => ({
	wishlist: [],
	setWishlist: (wishlist: any[]) => set({ wishlist }),
}))

export default useWishlistStore
