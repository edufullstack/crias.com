import React, { useState } from 'react';
import Validate from './validate';
import { useDispatch } from 'react-redux';
import { registroNuevo } from '../redux/criasActions';

const Registro = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    proveedor: '',
    identificador: '',
    peso: '',
    costo: '',
    nombre: '',
    descripcion: '',
  });
  const [errors, setErrors] = useState({
    proveedor: '',
    identificador: '',
    peso: '',
    costo: '',
    nombre: '',
    descripcion: '',
  });

  const handleInputChange = (event) => {
    event.preventDefault();
    setInput({ [event.target.name]: event.target.value });
    setErrors(Validate({ [event.target.name]: event.target.value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(registroNuevo(input));
  };
  return (
    <>
      <h2>registro</h2>
      <div className='collapse show' id='collapseExample'>
        <div className='card card-body'>
          <form onSubmit={handleSubmit}>
            <div>
              <h3>Registrar Cria</h3>
            </div>
            <div className='row mb-3'>
              <label htmlFor='inputEmail3' className='col-sm-2 col-form-label'>
                Proveedor
              </label>
              <div className='col-sm-10'>
                <input
                  type='text'
                  className='form-control'
                  id='inputEmail3'
                  name='proveedor'
                  value={input.proveedor}
                  onChange={handleInputChange}
                  placeholder='Proveedor'
                />
                {errors.proveedor && <p>{errors.proveedor}</p>}
              </div>
            </div>
            <div className='row mb-3'>
              <label
                htmlFor='inputPassword3'
                className='col-sm-2 col-form-label'
              >
                Identificador
              </label>
              <div className='col-sm-10'>
                <input
                  type='text'
                  className='form-control'
                  id='inputPassword3'
                  name='identificador'
                  value={input.identificador}
                  onChange={handleInputChange}
                  placeholder='Identificador'
                />
                {errors.identificador && <p>{errors.identificador}</p>}
              </div>
            </div>
            <div className='row mb-3'>
              <label
                htmlFor='inputPassword3'
                className='col-sm-2 col-form-label'
              >
                Peso
              </label>
              <div className='col-sm-10'>
                <input
                  className='form-control'
                  id='exampleFormControlTextarea1'
                  rows='5'
                  name='peso'
                  value={input.peso}
                  onChange={handleInputChange}
                  placeholder='Peso'
                ></input>
                {errors.peso && <p>{errors.peso}</p>}
              </div>
            </div>
            <div className='row mb-3'>
              <label
                htmlFor='inputPassword3'
                className='col-sm-2 col-form-label'
              >
                Costo
              </label>
              <div className='col-sm-10'>
                <input
                  className='form-control'
                  id='exampleFormControlTextarea1'
                  rows='5'
                  name='costo'
                  value={input.costo}
                  onChange={handleInputChange}
                  placeholder='Costo'
                ></input>
                {errors.costo && <p>{errors.costo}</p>}
              </div>
            </div>
            <div className='row mb-3'>
              <label
                htmlFor='inputPassword3'
                className='col-sm-2 col-form-label'
              >
                Nombre
              </label>
              <div className='col-sm-10'>
                <input
                  className='form-control'
                  id='exampleFormControlTextarea1'
                  rows='5'
                  name='nombre'
                  value={input.nombre}
                  onChange={handleInputChange}
                  placeholder='Nombre'
                ></input>
                {errors.nombre && <p>{errors.nombre}</p>}
              </div>
            </div>
            <div className='row mb-3'>
              <label
                htmlFor='inputPassword3'
                className='col-sm-2 col-form-label'
              >
                Descripcion
              </label>
              <div className='col-sm-10'>
                <textarea
                  className='form-control'
                  id='exampleFormControlTextarea1'
                  rows='5'
                  name='descripcion'
                  value={input.descripcion}
                  onChange={handleInputChange}
                  placeholder='Descripcion'
                ></textarea>
                {errors.descripcion && <p>{errors.descripcion}</p>}
              </div>
            </div>

            <button type='submit' className='btn btn-primary'>
              Registrar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Registro;
