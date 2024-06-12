import { useShopData } from '@hooks';
import { useLocation, useParams } from 'react-router-dom';
import { dictionaryRu } from '@root/app/dictionary';
import { AppPaths } from '@root/app/navigation';
import { Link } from '@components/service';
import { Card } from '@components/ui';

export const ShopGroupPage = () => {
  const { groupName } = useParams();
  const location = useLocation();
  const shopData = useShopData();
  const shopGroupData = shopData.find((shopItem) => shopItem.groupName === groupName);

  if (!shopGroupData) {
    return <p>{dictionaryRu.notFoundPageTitle}</p>;
  }

  return (
    <div>
      <h1 className="mb-10 text-center">{`${dictionaryRu.groupPageTitle} ${shopGroupData.groupName}`}</h1>
      <ul className="grid grid-cols-2 gap-4">
        {shopGroupData.groupData.subgroups.map((subgroup) => (
          <li key={subgroup.subgroupName}>
            <Link to={`${location.pathname}/${AppPaths.SHOP_SUBGROUP}/${subgroup.subgroupName}`}>
              <Card cardText={subgroup.subgroupName} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
