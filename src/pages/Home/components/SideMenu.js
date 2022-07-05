import { useTranslation } from 'react-i18next';
import Images from '../../../assets/Images';
import SideMenuItem from './SideMenuItem';

import '../css/SideMenu.css';

const SideMenu = () => {
  const { t } = useTranslation();
  return (
    <ul className="side-menu">
      <SideMenuItem logo={Images.golovnaLogo1} name={t('header.machines').toUpperCase()} url="obladnanya" />
      <SideMenuItem logo={Images.golovnaLogo2} name={t('header.instrument').toUpperCase()} url="instrument" />
      <SideMenuItem logo={Images.golovnaLogo3} name={t('header.machiningService').toUpperCase()} url="obrobka" />
      <SideMenuItem logo={Images.golovnaLogo4} name={t('header.engeneering').toUpperCase()} url="inzhiniring" />
    </ul>
  );
};

export default SideMenu;
