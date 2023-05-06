import './App.css';
import { Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import { useSelector } from 'react-redux';
import axios from 'axios';
import AgregarUsuarios from './components/agregarUsuarios';
import Dashboard from './components/dashboard';
axios.defaults.baseURL = 'http://localhost:3001/api';

function App() {
  const usuario = useSelector((state) => state.usuario);

  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
