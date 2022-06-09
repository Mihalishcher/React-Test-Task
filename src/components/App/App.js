import { Routes, Route } from 'react-router-dom';

import Home from '../../pages/Home/Home'
import Company from '../../pages/Company/Company';
import Obladnanya from '../../pages/Obladnanya/Obladnanya';
import Instrument from '../../pages/Instrument/Instrument';
import Obrobka from '../../pages/Obrobka/Obrobka';
import Inzhiniring from '../../pages/Inzhiniring/Inzhiniring';
import Contacts from '../../pages/Contacts/Contacts';


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
