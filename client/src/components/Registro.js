import React, { useState } from 'react';
import Validate from './validate';
import { useDispatch, useSelector } from 'react-redux';
import { registroNuevo } from '../redux/criasActions';

const Registro = () => {
  const dispatch = useDispatch();
  const iden = useSelector((state) => state.usuario.id);
  const [input, setInput] = useState({
    proveedor: '',
    fecha: '',
    peso: '',
    costo: '',
    nombre: '',
    descripcion: '',
    saludable: '',
    dieta: '',
    tratamiento: '',
    id: '',
  });
  const [errors, setErrors] = useState({
    proveedor: '',
    fecha: '',
    peso: '',
    costo: '',
    nombre: '',
    descripcion: '',
    saludable: '',
    dieta: '',
    tratamiento: '',
    id: '',
  });

  const handleInputChange = (event) => {
    event.preventDefault();
    setInput({ ...input, [event.target.name]: event.target.value, id: iden });
    setErrors(Validate({ ...input, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(registroNuevo(input));
    setInput({
      proveedor: '',
      fecha: '',
      peso: '',
      costo: '',
      nombre: '',
      descripcion: '',
      saludable: '',
      dieta: '',
      tratamiento: '',
      id: '',
    });
  };
  return (
    <>
      <form
        className='mx-auto my-5 p-3 shadow-lg rounded'
        style={{ maxWidth: 400 }}
        onSubmit={handleSubmit}
      >
        <div className='text-center'>
          <div className='collapse show' id='collapseExample'>
            <div className='card card-body'>
              <div>
                <h3>Registrar Cria</h3>
              </div>
              <div className='row mb-3'>
                <label
                  htmlFor='inputEmail3'
                  className='col-sm-2 col-form-label'
                ></label>
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
                ></label>
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
                ></label>
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
                ></label>
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
                ></label>
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
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Registro;
