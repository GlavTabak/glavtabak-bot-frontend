import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@components/ui';
import { useDictionary } from '@hooks';
import { Button } from '@nextui-org/react';
import { useCartStore, useTotalCartPrice } from '@root/entities';
import { flexRender, getCoreRowModel, useReactTable, type ColumnDef } from '@tanstack/react-table';

type CartItem = {
  itemName: string;
  quantity: number;
  price: number;
  totalPrice: number;
}

export const Cart = () => {
  const d = useDictionary();
  const cart = useCartStore((state) => state.cart);
  const resetCart = useCartStore((state) => state.resetCart);
  const totalPrice = useTotalCartPrice();
  const transformedCart: CartItem[] = Object.entries(cart)
    .map(([key, { price, quantity, totalPrice }]) => (
      {
        itemName: key,
        price,
        quantity,
        totalPrice
      }
    ));

  const cartColumns: ColumnDef<CartItem>[] = [
    {
      accessorKey: 'itemName',
      header: d.itemName,
    },
    {
      accessorKey: 'quantity',
      header: d.quantity,
    },
    {
      accessorKey: 'price',
      header: d.price,
    },
    {
      accessorKey: 'totalPrice',
      header: d.totalPriceTable,
    },
  ]

  const table = useReactTable({
    data: transformedCart,
    columns: cartColumns,
    getCoreRowModel: getCoreRowModel(),
  });

  const clearCartHandler = () => {
    resetCart()
  };
  
  if (Object.keys(cart).length === 0) {
    return <h1 className="text-center">{d.cartIsEmpty}</h1>;
  }

  return (
    <div className="space-y-5">
      <h1>{d.cart}</h1>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getAllCells().map((cell) => (
                <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex items-center justify-between">
        <Button variant="ghost" color="warning" onPress={clearCartHandler}>{d.clearCart}</Button>
        <div className="font-semibold text-lg">{d.totalPrice}: {totalPrice}</div>
      </div>
    </div>
  );
};
