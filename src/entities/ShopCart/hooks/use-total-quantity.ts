import { useCartStore } from '@root/entities';

export const useTotalQuantity = () => {
  const cartStore = useCartStore((state) => state.cart);
  return Object.values(cartStore).reduce((accum, { quantity }) => accum + quantity, 0);
};
