import { Link } from '@components/service';
import { Icon } from '@iconify/react';
import { Badge } from '@nextui-org/react';
import { AppPaths } from '@root/app/navigation';
import { useTotalQuantityStore } from '../model/store/cart';

export const ShopCartLinkIcon = () => {
  const totalQuantity = useTotalQuantityStore();

  return (
    <Link to={AppPaths.CART}>
      <Badge color="danger" content={totalQuantity} shape="circle">
        <Icon icon="heroicons:shopping-cart" className="size-8" color="black" />
      </Badge>
    </Link>
  );
};
