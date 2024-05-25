import { IQOSAccessories } from '@root/app/data/iqos-accessories';
import { dictionaryRu } from '@root/app/dictionary';
import iqosAccessoriesImg from '@root/app/assets/img/iqos.jpg';
import alkalineLiquidImg from '@root/app/assets/img/alkaline.jpg';
import chewingTobaccoImg from '@root/app/assets/img/chewing-tobacco.jpg';
import devicesImg from '@root/app/assets/img/devices.jpeg';
import eCigaretteImg from '@root/app/assets/img/e-cigarette.jpg';
import saltLiquidImg from '@root/app/assets/img/salt.jpg';

// TODO: здесь будут реальные данные вместо скопированных одних и тех же
export const shopData = [
  {
    id: '1',
    groupName: dictionaryRu.iqosAccessories,
    groupImg: iqosAccessoriesImg,
    groupData: IQOSAccessories,
  },
  {
    id: '2',
    groupName: dictionaryRu.chewingTobacco,
    groupImg: chewingTobaccoImg,
    groupData: IQOSAccessories,
  },
  {
    id: '3',
    groupName: dictionaryRu.alkalineLiquids,
    groupImg: alkalineLiquidImg,
    groupData: IQOSAccessories,
  },
  {
    id: '4',
    groupName: dictionaryRu.saltLiquids,
    groupImg: saltLiquidImg,
    groupData: IQOSAccessories,
  },
  {
    id: '5',
    groupName: dictionaryRu.eCigarette,
    groupImg: eCigaretteImg,
    groupData: IQOSAccessories,
  },
  {
    id: '6',
    groupName: dictionaryRu.devices,
    groupImg: devicesImg,
    groupData: IQOSAccessories,
  },
]
