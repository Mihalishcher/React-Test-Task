import AppInfo from './AppInfo';
import Navbar from './Navbar';

import './css/Header.css';

const Header = () => (
  <div className="header">
    <AppInfo />
    <Navbar />
  </div>
);

export default Header;
