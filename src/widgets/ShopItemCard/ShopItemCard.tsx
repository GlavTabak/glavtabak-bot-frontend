import { Icon } from '@iconify/react';
import { Button, Card, CardBody, CardFooter, CardHeader, Image } from '@nextui-org/react';
import type { FC } from 'react';
import { useCartStore } from '@root/entities';

interface ShopItemCardProps {
  itemData: {
    itemName: string;
    itemDescription?: string;
    itemImg?: string;
    itemPrice?: number;
  };
}

export const ShopItemCard: FC<ShopItemCardProps> = ({ itemData }) => {
  const { itemName, itemImg, itemPrice } = itemData;
  const { cart, addToCart, removeFromCart } = useCartStore((state) => state);
  const currentItemCount = cart[itemName || ''] || 0;

  return (
    <Card shadow="sm" fullWidth className="h-full">
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
      <CardFooter className="items-center justify-center text-small">
        {itemPrice && <b>{`${itemPrice} ₽`}</b>}
        <div className="flex items-center gap-5">
          <Button isIconOnly variant="light" color="danger" aria-label="Remove from cart" onPress={() => removeFromCart(itemName)}>
            <Icon icon="heroicons:minus-circle" className="size-8" />
          </Button>
          <div className="select-none font-bold text-lg">{currentItemCount}</div>
          <Button isIconOnly variant="light" color="success" aria-label="Add to cart" onPress={() => addToCart(itemName)}>
            <Icon icon="heroicons:plus-circle" className="size-8" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
