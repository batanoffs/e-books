import { create } from 'zustand'

interface CartItem {
	product: {
		id: string
		picture: string
		title: string
		price: number
	}
	quantity: number
}

interface CartState {
	cart: CartItem[]
	setCart: (items: CartItem[]) => void
	updateQuantity: (id: string, quantity: number) => void
	addToCart: (item: CartItem) => void
	removeFromCart: (productId: string) => void
	clearCart: () => void
}

const useCartStore = create<CartState>((set) => ({
	cart: [],
	setCart: (items) => set({ cart: items }),
	addToCart: (item) => {
		//This weird set of the object is because temporary testing Stripe API
		set((state) => {
			const existingProduct = state.cart.find(
				(current) => current.product.id === item.product.id
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
		set({ cart: [] })
	},
}))

export default useCartStore
