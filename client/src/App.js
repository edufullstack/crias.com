import './App.css';
import { Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Registro from './components/Registro.js';
import SaludCrias from './components/SaludCrias.js';
import Sensores from './components/Sensores';
import NotFound from './components/NotFound';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/registro' element={<Registro />} />
      <Route path='/salud' element={<SaludCrias />} />
      <Route path='/sensores' element={<Sensores />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
