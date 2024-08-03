import { create } from 'zustand'

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
	removeFromCart: (id: string) => void
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
	removeFromCart: (id) =>
		set((state) => {
			const updatedCart = state.cart.filter((item) => item.productId !== id)
			return { cart: updatedCart }
		}),
	updateQuantity: (id, quantity) =>
		set((state) => {
			const updatedCart = state.cart.map((item) =>
				item.productId === id ? { ...item, quantity } : item
			)
			return { cart: updatedCart }
		}),
}))

export default useCartStore
