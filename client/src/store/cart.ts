import { create } from 'zustand'

interface inputCart {
	productRef: {
		_id: string
		picture: string
		title: string
		price: number
		productType: string
		any: any
	}
	productType: string
	quantity: number
}

interface CartItem {
	product: {
		_id: string
		picture: string
		title: string
		price: number
		productType: string
	}
	productType: string
	quantity: number
}

interface CartState {
	cart: CartItem[]
	setCart: (items: inputCart[]) => void
	updateQuantity: (id: string, quantity: number) => void
	addToCart: (product: any, quantity: number) => void
	removeFromCart: (productId: string) => void
	clearCart: () => void
}

const useCartStore = create<CartState>((set) => ({
	cart: [],
	setCart: (items) => {
		set({ cart: items.map((item) => ({ ...item, product: item.productRef })) })
	},
	addToCart: (product, quantity) => {
		//This weird set of the objects is because temporary testing Stripe API
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
				return {
					...state,
					cart: [...state.cart, { product, quantity, productType: product.productType }],
				}
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
