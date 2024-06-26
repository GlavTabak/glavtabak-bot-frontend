import { useDictionary } from '@hooks';
import { Icon } from '@iconify/react';
import { Button } from '@nextui-org/react';
import { type ColumnDef, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { useMemo } from 'react';
import { AppPaths } from '@root/app/navigation';
import { useCartStore, useTotalCartPrice } from '@root/entities';
import { EmptyCart, useTotalQuantity } from '@root/entities/ShopCart';
import { Link } from '@components/service';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@components/ui';
import type { CartItem } from './model/types';
import { DeleteProductButton } from './ui';

export const Cart = () => {
  const d = useDictionary();
  const totalQuantity = useTotalQuantity();
  const cart = useCartStore((state) => state.cart);
  const addToCart = useCartStore((state) => state.addToCart);
  const subtractFromCart = useCartStore((state) => state.subtractFromCart);
  const resetCart = useCartStore((state) => state.resetCart);
  const totalPrice = useTotalCartPrice();

  const transformedCart: CartItem[] = useMemo(
    () =>
      Object.entries(cart).map(([key, { price, quantity, totalPrice }]) => ({
        itemName: key,
        price,
        quantity,
        totalPrice,
      })),
    [cart],
  );

  const cartColumns: ColumnDef<CartItem>[] = [
    {
      accessorKey: 'itemName',
      header: d.itemName,
    },
    {
      accessorKey: 'quantity',
      header: d.quantity,
      cell: ({ getValue, row }) => (
        <div className="flex items-center gap-x-1">
          <Button
            isIconOnly
            variant="light"
            color="danger"
            aria-label="Remove from cart"
            onPress={() => {
              /* Нужна проверка, чтобы счетчик товара не был меньше 1, так как меньше 1 означает, 
              что товар нужно полностью удалить, а для этого у нас отдельная кнопка */
              if (getValue<number>() - 1 === 0) return;
              subtractFromCart({ id: row.original.itemName, price: row.original.price });
            }}
          >
            <Icon icon="heroicons:minus-circle" className="size-5" />
          </Button>
          <span>{getValue<number>()}</span>
          <Button
            isIconOnly
            variant="light"
            color="success"
            aria-label="Add to cart"
            onPress={() => {
              addToCart({ id: row.original.itemName, price: row.original.price });
            }}
          >
            <Icon icon="heroicons:plus-circle" className="size-5" />
          </Button>
        </div>
      ),
    },
    /* {
      accessorKey: 'price',
      header: d.price,
    }, */
    {
      accessorKey: 'totalPrice',
      header: d.totalPriceTable,
    },
    {
      id: 'actions',
      cell: ({ row }) => <DeleteProductButton row={row} />,
    },
  ];

  const table = useReactTable({
    data: transformedCart,
    columns: cartColumns,
    getCoreRowModel: getCoreRowModel(),
  });

  const clearCartHandler = () => {
    resetCart();
  };

  if (totalQuantity === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="grid gap-8">
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
        <div className="flex items-center gap-x-2.5 justify-between">
          <Button variant="ghost" color="warning" onPress={clearCartHandler}>
            {d.clearCart}
          </Button>
          <div className="text-lg font-semibold text-center">
            {d.totalPrice}: {totalPrice}
          </div>
        </div>
      </div>
      <div className="self-end">
        <Link to={AppPaths.CHECKOUT}>
          <Button fullWidth variant="solid" color="primary" size="lg">
            {d.goToCheckout}
          </Button>
        </Link>
      </div>
    </div>
  );
};
