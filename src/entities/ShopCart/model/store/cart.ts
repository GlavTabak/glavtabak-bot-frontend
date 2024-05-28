import { create } from 'zustand';

interface CartState {
  cart: Record<string, number>;
}

interface CartActions {
  addToCart: (id: string) => void;
  removeFromCart: (id: string) => void;
  resetCart: () => void;
}

export const useCartStore = create<CartState & CartActions>()((set) => ({
  cart: {},
  addToCart: (id) =>
    set((state) => ({
      cart: {
        ...state.cart,
        [id]: (state.cart[id] || 0) + 1,
      },
    })),
  removeFromCart: (id) =>
    set((state) => {
      // Нужна проверка, чтобы счетчик товара не уходил в минус
      if ((state.cart[id] || 0) - 1 < 0) return state;
      
      return (
        {
          cart: {
            ...state.cart,
            [id]: (
              state.cart[id] || 0
            ) - 1,
          },
        }
      );
    }),
  resetCart: () => set({ cart: {} }),
}));
