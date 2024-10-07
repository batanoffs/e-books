import { create } from 'zustand'

interface CartItem {
	product: {
		_id: string
		picture: string
		title: string
		price: number
		productType: string
	}
	quantity: number
}

interface CartState {
	cart: CartItem[]
	setCart: (items: CartItem[]) => void
	updateQuantity: (id: string, quantity: number) => void
	addToCart: (product: any, quantity: number) => void
	removeFromCart: (productId: string) => void
	clearCart: () => void
}

const useCartStore = create<CartState>((set) => ({
	cart: [],
	setCart: (items) => {
		set({ cart: items })
	},
	//TODO pass product and quantity and then remodel the object
	addToCart: (product, quantity) => { //item
		//This weird set of the objects is because temporary testing Stripe API
		//TODO update for better performance the models or implement improvements
		set((state) => {
			const existingProduct = state.cart.find(
				(currentProduct) => currentProduct.product._id === product._id
			)
			if (existingProduct) {
				return {
					...state,
					cart: state.cart.map((current) => {
						if (current.product._id === product._id) {
							return { ...current, quantity: current.quantity + quantity }
						} else {
							return current
						}
					}),
				}
			} else {
				return { ...state, cart: [...state.cart, { ...product, quantity }] }
			}
		})
	},
	removeFromCart: (productId) => {
		set((state) => {
			const updatedCart = state.cart.filter((current) => current.product._id !== productId)
			return { cart: updatedCart }
		})
	},
	updateQuantity: (id, quantity) =>
		set((state) => {
			const updatedCart = state.cart.map((current) =>
				current.product._id === id ? { ...current, quantity } : current
			)
			return { cart: updatedCart }
		}),
	clearCart: () => {
		set({ cart: [] })
	},
}))

export default useCartStore
