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
  const handleClick = () => {
    navigate('/agregar');
  };
  return (
    <form
      className='mx-auto my-5 p-3 shadow-lg rounded'
      style={{ maxWidth: 400 }}
    >
      <div className='text-center'>
        <div className='form-group'>
          <label htmlFor='userId'>Ingrese su ID de usuario</label>
          <input
            type='text'
            className='form-control'
            id='userId'
            name='id'
            value={usuario.id}
            onChange={handleInputChange}
            placeholder='ID de usuario'
          />
          <label htmlFor='userPassword'>Contraseña</label>
          <input
            type='password'
            className='form-control'
            id='userPassword'
            name='password'
            value={usuario.password}
            onChange={handleInputChange}
            placeholder='Contraseña'
          />
          <button className='btn btn-primary' onClick={handleSubmit}>
            Entrar
          </button>
          <br />
          <hr />
          <button className='btn btn-primary' onClick={handleClick}>
            Agregar usuario
          </button>
        </div>
      </div>
    </form>
  );
};
export default Landing;
