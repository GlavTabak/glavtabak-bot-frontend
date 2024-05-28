import type { ColumnDef } from '@tanstack/react-table';

type CartItem = {
  itemName: string;
  quantity: number;
  price: number;
  totalPrice: number;
}

export const cartColumns: ColumnDef<CartItem>[] = [
  {
    accessorKey: 'itemName',
    header: 'Наименование',
  },
  {
    accessorKey: 'quantity',
    header: 'Количество',
  },
  {
    accessorKey: 'price',
    header: 'Цена за ед.',
  },
  {
    accessorKey: 'totalPrice',
    header: 'Итоговая сумма',
  },
]
