import AppInfo from './AppInfo';
import Navbar from './Navbar';

import './css/Header.css';

function Header() {
  return (
    <div className="header">
      <AppInfo />
      <Navbar />
    </div>
  );
}

export default Header;
