import { ENDPOINTS } from '@root/app/const/endpoints';
import type { CheckoutSchemaType } from './schema';

export const sendDataFetcher = (data: CheckoutSchemaType) => {
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
