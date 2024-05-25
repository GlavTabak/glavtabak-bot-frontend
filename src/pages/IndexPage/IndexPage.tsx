import { Link } from '@components/service';
import { Card } from '@components/ui';
import { dictionaryRu } from '@root/app/dictionary';
import { AppPaths } from '@root/app/navigation';
import { useShopData } from '@root/shared/lib/hooks';
import type { FC } from 'react';

export const IndexPage: FC = () => {
  const shopData = useShopData();

  return (
    <main>
      <h1 className="mb-10 text-center">{dictionaryRu.mainPageTitle}</h1>
      <ul className="grid grid-cols-2 gap-4">
        {shopData.map((shopItem) => (
          <li key={shopItem.id}>
            <Link to={`${AppPaths.SHOP}/${shopItem.groupName}`}>
              <Card
                cardText={shopItem.groupName}
                cardImg={shopItem.groupImg}
              />
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};
