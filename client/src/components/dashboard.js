import React from 'react';
import Registro from './Registro.js';
import SaludCrias from './SaludCrias.js';
import Sensores from './Sensores';
import NotFound from './NotFound';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../redux/usuarioActions.js';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const rol = useSelector((state) => state.usuario.rol);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //hace falta hacer el boton de cerrar sesion
  const handleClick = () => {
    dispatch(logOut());
    navigate('/');
  };
  return (
    <div>
      <h2 style={{ backgroundColor: 'white', padding: '10px' }}>Dashboard</h2>
      <button onClick={handleClick}>Cerrar sesion</button>
      {rol === 'master' ? (
        <>
          <Registro />
          <Sensores />
          <SaludCrias />
        </>
      ) : rol === 'control' || rol === 'reclutador' ? (
        <Registro />
      ) : rol === 'ayudante' ? (
        <Sensores />
      ) : rol === 'veterinario' ? (
        <SaludCrias />
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default Dashboard;
