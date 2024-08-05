import { create } from 'zustand'
import { cartService } from '../services/cartService'

interface CartItem {
	productType: string
	productId: string
	quantity: number
	name: string
	price: number
}

interface CartState {
	cart: CartItem[]
	updateQuantity: (id: string, quantity: number) => void
	addToCart: (item: Omit<CartItem, 'quantity'>) => void
	removeFromCart: (productId: string, userId: string) => void
	clearCart: (userId: string) => void
}

const useCartStore = create<CartState>((set) => ({
	cart: [],
	addToCart: (item) => {
		set((state) => {
			const existingProduct = state.cart.find(
				(product) => product.productId === item.productId
			)
			if (existingProduct) {
				existingProduct.quantity += item.quantity
			} else {
				set({
					cart: [...state.cart, { ...item, quantity: item.quantity }],
				})
			}
		})
	},
	removeFromCart: async (productId, userId) => {
		await cartService.removeOne(productId, userId)
		set((state) => {
			const updatedCart = state.cart.filter((item) => item.productId !== productId)
			return { cart: updatedCart }
		})
	},
	updateQuantity: (id, quantity) =>
		set((state) => {
			const updatedCart = state.cart.map((item) =>
				item.productId === id ? { ...item, quantity } : item
			)
			return { cart: updatedCart }
		}),
	clearCart: async (userId) => {
		await cartService.removeAll(userId)
		set({ cart: [] })
	},
}))

export default useCartStore
