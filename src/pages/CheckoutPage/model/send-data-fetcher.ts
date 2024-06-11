import { ENDPOINTS } from '@root/app/const/endpoints';
import type { Cart } from '@root/entities/ShopCart';
import type { CheckoutSchemaType } from './schema';

interface SendDataFetcherProps {
  cart: Cart;
  delivery_data: CheckoutSchemaType;
}

export const sendDataFetcher = (data: SendDataFetcherProps) => {
  try {
    fetch(`${import.meta.env.VITE_BOT_URL}${ENDPOINTS.CHECKOUT}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.error(error);
  }
};
