import { Icon } from '@iconify/react';
import { Badge } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { useCartStore } from '../model/store/cart';

export const ShopCart = () => {
  const [cartCount, setCartCount] = useState<number>(0);

  useEffect(() => {
    const unsubscribe = useCartStore.subscribe((state) => {
      setCartCount(Object.values(state.cart).reduce((accum, itemCount) => accum + itemCount, 0));
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Badge color="danger" content={cartCount} shape="circle">
      <Icon icon="heroicons:shopping-cart" className="size-8" color="black" />
    </Badge>
  );
};
