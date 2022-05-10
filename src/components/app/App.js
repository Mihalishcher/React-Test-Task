import { Routes, Route } from 'react-router-dom';

import Home from '../home/home';
import Company from '../company/company';
import Obladnanya from '../obladnanya/obladnanya';
import Instrument from '../instrument/instrument';
import Obrobka from '../obrobka/obrobka';
import Inzhiniring from '../inzhiniring/inzhiniring';
import Contacts from '../contacts/contacts';


import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='React-test-task' element={<Home />} />
        <Route path='React-test-task/Company' element={<Company />} />
        <Route path='React-test-task/Obladnanya' element={<Obladnanya />} />
        <Route path='React-test-task/Instrument' element={<Instrument />} />
        <Route path='React-test-task/Obrobka' element={<Obrobka />} />
        <Route path='React-test-task/Inzhiniring' element={<Inzhiniring />} />
        <Route path='React-test-task/Contacts' element={<Contacts />} />
      </Routes>
    </div >

  );
}

export default App;
