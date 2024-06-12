export type Cart = Record<
  string,
  {
    quantity: number;
    price: number;
    totalPrice: number;
  }
>;
