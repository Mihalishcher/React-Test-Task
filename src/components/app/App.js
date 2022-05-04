import { Routes, Route } from 'react-router-dom';

import Home from '../home/home';
import Instrument from '../instrument/instrument';

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/instrument' element={<Instrument />} />
      </Routes>
    </div >

  );
}

export default App;
