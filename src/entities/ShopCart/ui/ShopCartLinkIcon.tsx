import { Icon } from '@iconify/react';
import { Badge } from '@nextui-org/react';
import { AppPaths } from '@root/app/navigation';
import { Link } from '@components/service';
import { useTotalQuantity } from '../';

export const ShopCartLinkIcon = () => {
  const totalQuantity = useTotalQuantity();

  return (
    <Link to={AppPaths.CART}>
      <Badge color="danger" content={totalQuantity} shape="circle">
        <Icon icon="heroicons:shopping-cart" className="size-8" color="black" />
      </Badge>
    </Link>
  );
};
