import { create } from 'zustand'

interface CartItem {
	product: {
		id: string
		coverImagePath: string
		title: string
		price: number
	}
	quantity: number
}

interface CartState {
	cart: CartItem[]
	updateQuantity: (id: string, quantity: number) => void
	addToCart: (item: CartItem) => void
	removeFromCart: (productId: string) => void
	clearCart: () => void
}

const useCartStore = create<CartState>((set) => ({
	cart: [],
	addToCart: (item) => {
		set((state) => {
			const existingProduct = state.cart.find(
				(product) => product.product.id === item.product.id
			)
			if (existingProduct) {
				return {
					...state,
					cart: state.cart.map((product) =>
						product.product.id === item.product.id
							? { ...product, quantity: product.quantity + item.quantity }
							: product
					),
				}
			} else {
				return { ...state, cart: [...state.cart, { ...item, quantity: item.quantity }] }
			}
		})
	},
	removeFromCart: (productId) => {
		// await cartService.removeOne(productId, userId)
		set((state) => {
			const updatedCart = state.cart.filter((item) => item.product.id !== productId)
			return { cart: updatedCart }
		})
	},
	updateQuantity: (id, quantity) =>
		set((state) => {
			const updatedCart = state.cart.map((item) =>
				item.product.id === id ? { ...item, quantity } : item
			)
			return { cart: updatedCart }
		}),
	clearCart: () => {
		// await cartService.removeAll(userId)
		set({ cart: [] })
	},
}))

export default useCartStore
