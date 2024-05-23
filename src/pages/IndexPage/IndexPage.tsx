import { Card } from '@components/ui';
import { dictionaryRu } from '@root/app/dictionary';
import { useShopData } from '@root/shared/lib/hooks';
import type { FC } from 'react';

export const IndexPage: FC = () => {
  const shopData = useShopData();
  
  return (
    <main>
      <h1 className="mb-10 text-center font-bold text-lg">{dictionaryRu.mainPageTitle}</h1>
      <ul className="grid grid-cols-2 gap-4">
        {shopData.map((shopItem) => (
          <li key={shopItem.id}>
            {/* Оборачиваем в линк, чтобы открывалось дальше */}
            <Card
              cardText={shopItem.groupName}
              cardImg={shopItem.groupImg}
            />
          </li>
        ))}
      </ul>
    </main>
  );
};
