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
        {/* Палетка цветов телеграма для тестирования */}
{/*     <li className="w-full h-20 bg-background">1</li>
        <li className="w-full h-20 bg-foreground">2</li>
        <li className="w-full h-20 bg-theme-bg-color">13</li>
        <li className="w-full h-20 bg-theme-secondary-bg-color">10</li>
        <li className="w-full h-20 bg-theme-section-bg-color">5</li>
        <li className="w-full h-20 bg-theme-header-bg-color">12</li>
        <li className="w-full h-20 bg-theme-text-color">3</li>
        <li className="w-full h-20 bg-theme-subtitle-text-color">4</li>
        <li className="w-full h-20 bg-theme-section-header-text-color">6</li>
        <li className="w-full h-20 bg-theme-accent-text-color">9</li>
        <li className="w-full h-20 bg-theme-destructive-text-color">11</li>
        <li className="w-full h-20 bg-theme-link-color">7</li>
        <li className="w-full h-20 bg-theme-hint-color">8</li> */}
      </ul>
    </main>
  );
};
