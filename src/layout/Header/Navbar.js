import { NavLink } from 'react-router-dom';

import './css/Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <li><NavLink to="/">Головна</NavLink></li>
      <li><NavLink to="/Company">Компанія</NavLink></li>
      <li><NavLink to="/Obladnanya">Обладнання</NavLink></li>
      <li><NavLink to="/Instrument">Інструмент</NavLink></li>
      <li><NavLink to="/Obrobka">Послуги обробки</NavLink></li>
      <li><NavLink to="/Inzhiniring">Інжинірінг</NavLink></li>
      <li><NavLink to="/Contacts">Контакти</NavLink></li>
    </nav>
  );
};

export default Navbar;
