import { useContext } from 'react';
import cn from 'classnames';
import i18n from 'i18next';

import LanguageContext from '../../context/LanguageContext';
import ThemeContext from '../../context/ThemeContext';
import Images from '../../assets/Images';

import './css/AppInfo.css';

const AppInfo = () => {
  const themeContext = useContext(ThemeContext);
  const languageContext = useContext(LanguageContext);
  return (
    <div className="head">
      <img className="app-logo" src={Images.logoAsTec} alt="Company logo" />
      <div className="contact-info">
        <a href="tel:+380661234567">Tel: +38 066-123-45-67</a>
        <br />
        <a href="mailto:mail@gmail.com">E-Mail : mail@gmail.com</a>
      </div>
      <div className="instrument-zone">
        <button
          className="dayAndNightMode"
          type="button"
          onClick={themeContext}
        >
          <img
            src={Images.dayNight}
            alt="day and night mode"
          />
        </button>
        <button
          className={cn('language-select', i18n.language)}
          type="button"
          onClick={languageContext}
        >
          { }
        </button>
      </div>
    </div>
  );
};

export default AppInfo;
