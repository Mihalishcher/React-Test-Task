import {
  useCallback, useState, Suspense
} from 'react';
import { Routes, Route } from 'react-router-dom';
import i18n from 'i18next';
import './i18n/index';

import LanguageContext from './context/LanguageContext';

import Home from './pages/Home/Home';
import Company from './pages/Company/Company';
import Obladnanya from './pages/Obladnanya/Obladnanya';
import Instrument from './pages/Instrument/Instrument';
import Obrobka from './pages/Obrobka/Obrobka';
import Inzhiniring from './pages/Inzhiniring/Inzhiniring';
import Contacts from './pages/Contacts/Contacts';
import Spinner from './components/Spinner/Spinner';

import './styles/App.css';

const App = () => {
  const changeLang = (lang) => (lang !== 'en' ? 'en' : 'ua');
  const [language, setLanguage] = useState(i18n.language);

  const toggleLanguage = useCallback(() => {
    setLanguage((prevLang) => changeLang(prevLang));
    i18n.changeLanguage(changeLang(language));
  });

  return (
    <Suspense fallback={<Spinner />}>
      <LanguageContext.Provider value={toggleLanguage}>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Company" element={<Company />} />
            <Route path="/Obladnanya" element={<Obladnanya />} />
            <Route path="/Instrument" element={<Instrument />} />
            <Route path="/Obrobka" element={<Obrobka />} />
            <Route path="/Inzhiniring" element={<Inzhiniring />} />
            <Route path="/Contacts" element={<Contacts />} />
          </Routes>
        </div>
      </LanguageContext.Provider>
    </Suspense>
  );
};

export default App;
