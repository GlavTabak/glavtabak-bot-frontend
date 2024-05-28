import { create, useStore } from 'zustand';
import { derive } from 'derive-zustand';
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

const totalPriceStore = derive<number>((get) => { 
  const cartStore = get(useCartStore);
  return Object.values(cartStore.cart).reduce((accum, { totalPrice }) => accum + totalPrice, 0);
});
const useTotalPriceStore = () => useStore(totalPriceStore);

const totalQuantityStore = derive<number>((get) => {
  const cartStore = get(useCartStore);
  return Object.values(cartStore.cart).reduce((accum, { quantity }) => accum + quantity, 0);
});
const useTotalQuantityStore = () => useStore(totalQuantityStore);

export { useCartStore, useTotalPriceStore, useTotalQuantityStore }
