import './App.css';
import { Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import axios from 'axios';
import AgregarUsuarios from './components/agregarUsuarios';
import Dashboard from './components/dashboard';
// axios.defaults.baseURL = 'http://localhost:3001/api';
axios.defaults.baseURL = 'https://crias.onrender.com/api';

function App() {
  return (
    <>
      <Routes>
        <Route path='/agregar' element={<AgregarUsuarios />} />
        <Route path='/' element={<Landing />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
