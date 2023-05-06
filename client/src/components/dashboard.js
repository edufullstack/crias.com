import React from 'react';
import Registro from './Registro.js';
import SaludCrias from './SaludCrias.js';
import Sensores from './Sensores';
import NotFound from './NotFound';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const rol = useSelector((state) => state.usuario.rol);

  return (
    <div>
      <h2>Dashboard</h2>
      {rol === 'master' ? (
        <>
          <Registro />
          <SaludCrias />
          <Sensores />
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
