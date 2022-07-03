import AppInfo from './AppInfo';
import Navbar from './Navbar';

import './css/Header.css';

const Header = () => {
  return (
    <div className="header">
      <AppInfo />
      <Navbar />
    </div>
  );
};

export default Header;
