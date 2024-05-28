import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@components/ui';
import { useDictionary } from '@hooks';
import { useCartStore } from '@root/entities';
import { useTotalPriceStore } from '@root/entities/ShopCart';
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { cartColumns } from './model/columns';

export const Cart = () => {
  const d = useDictionary();
  const cart = useCartStore((state) => state.cart);
  const totalPrice = useTotalPriceStore();
  const transformedCart = Object.entries(cart)
    .map(([key, { price, quantity, totalPrice }]) => (
      {
        itemName: key,
        price,
        quantity,
        totalPrice
      }
    ));

  const table = useReactTable({
    data: transformedCart,
    columns: cartColumns,
    getCoreRowModel: getCoreRowModel(),
  });

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
      <div className="ml-auto">{d.totalPrice}: {totalPrice}</div>
    </div>
  );
};
