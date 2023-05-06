import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getUsuario } from '../redux/usuarioActions';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const [id, setId] = useState({ id: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setId({ [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getUsuario(id));
    navigate('/dashboard');
  };
  return (
    <div>
      <h2>Ingrese su id de usuario</h2>
      <input name='id' value={id.id} onChange={handleInputChange} />
      <button onClick={handleSubmit}> Entrar</button>
    </div>
  );
};

export default Landing;
