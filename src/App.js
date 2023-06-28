import { useCallback, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import i18n from 'i18next';
import './i18n/index';

import LanguageContext from './context/LanguageContext';
import ThemeContext from './context/ThemeContext';

import Home from './pages/Home/Home';
import Company from './pages/Company/Company';
import Obladnanya from './pages/Obladnanya/Obladnanya';
import Instrument from './pages/Instrument/Instrument';
import Obrobka from './pages/Obrobka/Obrobka';
import Inzhiniring from './pages/Inzhiniring/Inzhiniring';
import Contacts from './pages/Contacts/Contacts';

import './styles/App.css';

const App = () => {
  // prettier-ignore
  const lastUsedTheme = localStorage.getItem('app-theme') === 'dark' ? 'dark' : null;
  const changeLang = (lang) => (lang !== 'en' ? 'en' : 'ua');
  const [theme, setTheme] = useState(lastUsedTheme);
  const [language, setLanguage] = useState(i18n.language);

  useEffect(() => {
    localStorage.setItem('app-theme', theme);
  }, [theme]);

  const toggleLanguage = useCallback(() => {
    setLanguage((prevLang) => changeLang(prevLang));
    i18n.changeLanguage(changeLang(language));
  }, [language]);

  const toggleTheme = useCallback(() => {
    setTheme(theme ? null : 'dark');
  }, [theme]);

  return (
    // prettier-ignore
    <ThemeContext.Provider value={toggleTheme}>
      <LanguageContext.Provider value={toggleLanguage}>
        <div className={`App ${theme}`}>
          <Routes>
            <Route path="/React-test-task/" element={<Home />} />
            <Route path="/React-test-task/Company" element={<Company />} />
            <Route path="/React-test-task/Obladnanya" element={<Obladnanya />} />
            <Route path="/React-test-task/Instrument" element={<Instrument />} />
            <Route path="/React-test-task/Obrobka" element={<Obrobka />} />
            <Route path="/React-test-task/Inzhiniring" element={<Inzhiniring />} />
            <Route path="/React-test-task/Contacts" element={<Contacts />} />
          </Routes>
        </div>
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
