import { useCartStore } from '@root/entities';

export const useTotalCartPrice = () => {
  const cartStore = useCartStore((state) => state.cart);
  return Object.values(cartStore).reduce((accum, { totalPrice }) => accum + totalPrice, 0);
};
