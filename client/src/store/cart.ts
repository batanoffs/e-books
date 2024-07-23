import { create } from 'zustand';

interface CartItem {
    id: string;
    title: string;
    price: number;
    quantity: number;
}

interface Order {
    id: string;
    items: CartItem[];
    paymentMethod: string;
    deliveryMethod: string;
}

interface StoreState {
    cart: CartItem[];
    order: Order | null;
    addToCart: (item: Omit<CartItem, 'quantity'>) => void;
    removeFromCart: (id: string) => void;
    updateQuantity: (id: string, quantity: number) => void;
    placeOrder: (order: Order) => void;
    resetCart: () => void;
}

const useCartStore = create<StoreState>((set) => ({
    cart: [],
    order: null,
    addToCart: (item) =>
        set((state) => {
            const existingItem = state.cart.find((cartItem) => cartItem.id === item.id);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                state.cart.push({ ...item, quantity: 1 });
            }
            return { cart: [...state.cart] };
        }),
    removeFromCart: (id) =>
        set((state) => ({
            cart: state.cart.filter((item) => item.id !== id),
        })),
    updateQuantity: (id, quantity) =>
        set((state) => {
            const item = state.cart.find((cartItem) => cartItem.id === id);
            if (item) {
                item.quantity = quantity;
            }
            return { cart: [...state.cart] };
        }),
    placeOrder: (order) =>
        set(() => ({
            order: order,
            cart: [],
        })),
    resetCart: () =>
        set(() => ({
            cart: [],
        })),
}));

export default useCartStore;
