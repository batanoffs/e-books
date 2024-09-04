import { create } from 'zustand'

interface CartItem {
	product: {
		_id: string
		picture: string
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
		//This weird set of the object is because temporary testing Stripe API
		set((state) => {
			const existingProduct = state.cart.find(
				(product) => product.product._id === item.product._id
			)
			if (existingProduct) {
				return {
					...state,
					cart: state.cart.map((product) =>
						product.product._id === item.product._id
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
				item.product._id === id ? { ...item, quantity } : item
			)
			return { cart: updatedCart }
		}),
	clearCart: () => {
		set({ cart: [] })
	},
}))

export default useCartStore
