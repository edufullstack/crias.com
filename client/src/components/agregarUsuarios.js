import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { registrarUsuario } from '../redux/usuarioActions';

const AgregarUsuarios = () => {
  const dispatch = useDispatch();
  const [usuario, setUsuario] = useState({
    id: '',
    rol: '',
    password: '',
  });

  const handleInputChange = (event) => {
    event.preventDefault();
    setUsuario({ ...usuario, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(registrarUsuario(usuario));
  };
  return (
    <div>
      <h2>AgregarUsuarios</h2>
      <label>Rol</label>
      <select name='rol' onChange={handleInputChange}>
        <option value='master'>Master</option>
        <option value='control'>Control</option>
        <option value='reclutador'>Reclutador</option>
        <option value='ayudante'>Ayudante</option>
        <option value='veterinario'>Veterinario</option>
      </select>
      <label>Contrasena</label>
      <input
        name='password'
        value={usuario.password}
        onChange={handleInputChange}
      />

      <button onClick={handleSubmit}>Registrar nuevo usuario</button>
    </div>
  );
};

export default AgregarUsuarios;
