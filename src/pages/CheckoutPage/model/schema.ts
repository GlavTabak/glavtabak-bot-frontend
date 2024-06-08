import { z } from 'zod';

export const CheckoutSchema = z.object({
  name: z.string().min(1),
  phone: z.string().min(1),
  delivery_type: z.string().min(1),
  address_pickup: z.string().optional(),
  address_city: z.string().optional(),
  address_street: z.string().optional(),
  address_house: z.string().optional(),
  address_entrance: z.string().optional(),
  address_apartment: z.string().optional(),
  address_doorbell_code: z.string().optional(),
  address_comment: z.string().optional(),
})

export type CheckoutSchemaType = z.infer<typeof CheckoutSchema>
