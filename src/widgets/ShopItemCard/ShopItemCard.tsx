import { Icon } from '@iconify/react';
import { Button, Card, CardBody, CardFooter, CardHeader, Image } from '@nextui-org/react';
import type { FC } from 'react';
import { useCartStore } from '@root/entities';

interface ShopItemCardProps {
  itemData: {
    itemName: string;
    price: number;
    itemDescription?: string;
    itemImg?: string;
  };
}

export const ShopItemCard: FC<ShopItemCardProps> = ({ itemData }) => {
  const { itemName, itemImg, price } = itemData;
  const { cart, addToCart, subtractFromCart } = useCartStore((state) => state);
  const currentItemCount = cart[itemName || '']?.quantity || 0;

  const removeItemHandler = () => {
    subtractFromCart({ id: itemName, price: price })
  };

  const addItemHandler = () => {
    addToCart({ id: itemName, price: price })
  };

  return (
    <Card shadow="sm" fullWidth className="h-full bg-theme-bg-color text-theme-text-color">
      {itemName && (
        <CardHeader className="justify-center text-center">
          <b>{itemName}</b>
        </CardHeader>
      )}
      <CardBody className="overflow-visible p-0">
        {itemImg && (
          <Image
            shadow="sm"
            radius="lg"
            width="100%"
            alt={itemName}
            className="h-[140px] w-full object-cover"
            src={itemImg}
          />
        )}
      </CardBody>
      <CardFooter className="grid justify-items-center gap-y-2.5 text-small">
        {price && <b className="text-lg">{`${price} ₽`}</b>}
        <div className="flex items-center gap-5">
          <Button
            isIconOnly variant="light" color="danger" aria-label="Remove from cart" onPress={removeItemHandler}
          >
            <Icon icon="heroicons:minus-circle" className="size-8" />
          </Button>
          <div className="select-none font-bold text-lg">{currentItemCount}</div>
          <Button
            isIconOnly
            variant="light"
            color="success"
            aria-label="Add to cart"
            onPress={addItemHandler}
          >
            <Icon icon="heroicons:plus-circle" className="size-8" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
