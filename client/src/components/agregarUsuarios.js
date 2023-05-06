import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { registrarUsuario } from '../redux/usuarioActions';

const AgregarUsuarios = () => {
  const dispatch = useDispatch();
  const [usuario, setUsuario] = useState({
    id: '',
    rol: '',
  });

  const handleInputChange = (event) => {
    event.preventDefault();
    setUsuario({ [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(registrarUsuario(usuario));
  };
  return (
    <div>
      <h2>AgregarUsuarios</h2>
      <label>Rol</label>
      <input name='rol' value={usuario.rol} onChange={handleInputChange} />
      <button onClick={handleSubmit}>Registrar nuevo usuario</button>
    </div>
  );
};

export default AgregarUsuarios;
