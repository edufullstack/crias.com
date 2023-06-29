import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getUsuario } from '../redux/usuarioActions';
import { useNavigate } from 'react-router-dom';
import './landing.css'

const Landing = () => {
  const [usuario, setUsuario] = useState({ id: '', password: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [hidden, setHidden] =  false

  const handleButton = ()=>{
    setHidden(!hidden)
  }

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
    <div >
      <div className='navbar'>
      <p>Rancho La Aurora</p>
      <div className='contenedor-boton__navbar'>

      <button>Inicio</button>
      <button>Nosotros</button>
      <button>Contacto</button>
      <button onClick={handleButton}>Ingresar</button>
      </div>
      </div>
    
    <form hidden={hidden}
      className='mx-auto my-5 p-3 shadow-lg rounded'
      style={{ maxWidth: 400, backgroundColor: 'white' }}
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

    <div className='contenedor-naranja'>
      <p>100% <br/>Producto Organico</p>
      <div></div>
      <p>100% <br/>Producto Mexicano</p>
    </div>

    </div>
  );
};
export default Landing;
