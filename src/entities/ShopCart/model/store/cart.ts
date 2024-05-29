import { create } from 'zustand';
import type { Cart } from '../../types/cart';

interface CartState {
  cart: Cart;
}

interface CartActions {
  addToCart: ({ id, price }: { id: string, price: number }) => void;
  removeFromCart: ({ id, price }: { id: string, price: number }) => void;
  resetCart: () => void;
}

const useCartStore = create<CartState & CartActions>()((set) => (
  {
    cart: {},
    addToCart: ({ id, price }) =>
      set((state) => (
        {
          cart: {
            ...state.cart,
            [id]: {
              price: price,
              quantity: (
                state.cart[id]?.quantity || 0
              ) + 1,
              totalPrice: (
                state.cart[id]?.totalPrice || 0
              ) + price,
            },
          },
        }
      )),
    removeFromCart: ({ id, price }) =>
      set((state) => {
        // Нужна проверка, чтобы счетчик товара не уходил в минус
        if ((
          state.cart[id]?.quantity || 0
        ) - 1 < 0) {
          return state;
        }

        return (
          {
            cart: {
              ...state.cart,
              [id]: {
                price: price,
                quantity: (
                  state.cart[id]?.quantity || 0
                ) - 1,
                totalPrice: (
                  state.cart[id]?.totalPrice || 0
                ) - price,
              },
            },
          }
        );
      }),
    resetCart: () => set({ cart: {} }),
  }
));

export { useCartStore }
