import { useShopData } from '@hooks';
import { useParams } from 'react-router-dom';
import { dictionaryRu } from '@root/app/dictionary';
import { ShopItemCard } from '@root/widgets';

export const ShopSubgroupPage = () => {
  const { groupName, subgroupName } = useParams();
  const shopData = useShopData();
  const shopGroupData = shopData.find((shopItem) => shopItem.groupName === groupName);
  const shopSubgroupData = shopGroupData?.groupData.subgroups.find(
    (subgroup) => subgroup.subgroupName === subgroupName,
  );

  if (!shopGroupData || !shopSubgroupData) {
    return <p>{dictionaryRu.notFoundPageTitle}</p>;
  }

  return (
    <div>
      <h1 className="mb-10 text-center">{`${dictionaryRu.subgroupPageTitle} ${shopSubgroupData.subgroupName}`}</h1>
      <ul className="grid grid-cols-2 gap-4">
        {shopSubgroupData.items.map(({ itemName, price }) => (
          <li key={itemName}>
            <ShopItemCard
              itemData={{
                itemName,
                price: parseInt(price),
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
