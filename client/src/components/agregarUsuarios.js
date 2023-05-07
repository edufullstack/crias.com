import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { registrarUsuario } from '../redux/usuarioActions';
import { useNavigate } from 'react-router-dom';

const AgregarUsuarios = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
  const handleClick = () => {
    navigate('/');
  };
  return (
    <div
      className='card text-center mx-auto mt-5'
      style={{ maxWidth: '400px' }}
    >
      <div className='card-header'>
        <h2>Agregar Usuarios</h2>
      </div>
      <div className='card-body'>
        <form>
          <div className='form-group'>
            <label htmlFor='rol'>Selecciona un rol:</label>
            <select
              className='form-control'
              id='rol'
              name='rol'
              value={usuario.rol}
              onChange={handleInputChange}
            >
              <option value=''>Selecciona una opción</option>
              <option value='master'>Master</option>
              <option value='control'>Control</option>
              <option value='reclutador'>Reclutador</option>
              <option value='ayudante'>Ayudante</option>
              <option value='veterinario'>Veterinario</option>
            </select>
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Contraseña:</label>
            <input
              className='form-control'
              type='password'
              id='password'
              name='password'
              value={usuario.password}
              onChange={handleInputChange}
            />
          </div>
          <button className='btn btn-primary' onClick={handleSubmit}>
            Registrar nuevo usuario
          </button>
          <button className='btn btn-primary' onClick={handleClick}>
            Regresar a inicio
          </button>
        </form>
      </div>
    </div>
  );
};

export default AgregarUsuarios;
