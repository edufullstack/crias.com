import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getUsuario } from '../redux/usuarioActions';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const [usuario, setUsuario] = useState({ id: '', password: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setUsuario({ ...usuario, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getUsuario(usuario));
    navigate('/dashboard');
  };
  return (
    <div>
      <label>Ingrese su id de usuario</label>
      <input name='id' value={usuario.id} onChange={handleInputChange} />
      <label>Contrasena</label>
      <input
        name='password'
        value={usuario.password}
        onChange={handleInputChange}
      />
      <button onClick={handleSubmit}> Entrar</button>
    </div>
  );
};

export default Landing;
