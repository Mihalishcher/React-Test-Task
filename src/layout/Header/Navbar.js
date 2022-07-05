import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import './css/Navbar.css';

const Navbar = () => {
  const { t } = useTranslation();
  return (
    <nav>
      <li><NavLink to="/">{t('header.home')}</NavLink></li>
      <li><NavLink to="/Company">{t('header.company')}</NavLink></li>
      <li><NavLink to="/Obladnanya">{t('header.machines')}</NavLink></li>
      <li><NavLink to="/Instrument">{t('header.instrument')}</NavLink></li>
      <li><NavLink to="/Obrobka">{t('header.machiningService')}</NavLink></li>
      <li><NavLink to="/Inzhiniring">{t('header.engeneering')}</NavLink></li>
      <li><NavLink to="/Contacts">{t('header.contacts')}</NavLink></li>
    </nav>
  );
};

export default Navbar;
