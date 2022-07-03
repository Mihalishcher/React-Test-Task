import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Company from './pages/Company/Company';
import Obladnanya from './pages/Obladnanya/Obladnanya';
import Instrument from './pages/Instrument/Instrument';
import Obrobka from './pages/Obrobka/Obrobka';
import Inzhiniring from './pages/Inzhiniring/Inzhiniring';
import Contacts from './pages/Contacts/Contacts';

import './styles/App.css';

const App = () => {
  return (
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
  );
};

export default App;
