import { useContext } from 'react';
import Images from '../../assets/Images';
import ThemeContext from '../../context/ThemeContext';

import './css/AppInfo.css';

const AppInfo = () => {
  const context = useContext(ThemeContext);
  return (
    <div className="head">
      <img className="app-logo" src={Images.logoAsTec} alt="Company logo" />
      <div className="contact-info">
        <a href="tel:+380661234567">Tel: +38 066-123-45-67</a>
        <br />
        <a href="mailto:mail@gmail.com">E-Mail : mail@gmail.com</a>
      </div>
      <button
        className="dayAndNightMode"
        type="button"
        onClick={context}
      >
        <img
          src={Images.dayNight}
          alt="day and night mode"
        />
      </button>

    </div>
  );
};

export default AppInfo;
