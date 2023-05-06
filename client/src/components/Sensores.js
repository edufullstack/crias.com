import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import ValidateSensor from './validateSensor';

const Sensores = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    identificador: '',
    freCardiaca: '',
    preSanguinea: '',
    freRespiratoria: '',
    temperatura: '',
    saludable: '',
  });

  const [errors, setErrors] = useState({
    identificador: '',
    freCardiaca: '',
    preSanguinea: '',
    freRespiratoria: '',
    temperatura: '',
    saludable: '',
  });

  const handleInputChange = (event) => {
    event.preventDefault();
    setInput({ [event.target.name]: event.target.value });
    setErrors(ValidateSensor({ [event.target.name]: event.target.value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.temperatura > 37.5 && input.temperatura < 39.5) {
      setInput({ ...input, saludable: true });
    } else {
      setInput({ ...input, saludable: false });
    }
    if (input.freCardiaca > 70 && input.freCardiaca < 80) {
      setInput({ ...input, saludable: true });
    } else {
      setInput({ ...input, saludable: false });
    }
    if (input.freRespiratoria > 15 && input.freRespiratoria < 20) {
      setInput({ ...input, saludable: true });
    } else {
      setInput({ ...input, saludable: false });
    }
    if (input.preSanguinea > 8 && input.preSanguinea < 10) {
      setInput({ ...input, saludable: true });
    } else {
      setInput({ ...input, saludable: false });
    }
    // dispatch
  };
  return (
    <>
      <h2>registro</h2>
      <div className='collapse show' id='collapseExample'>
        <div className='card card-body'>
          <form onSubmit={handleSubmit}>
            <h3>Registrar Sensor</h3>
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
                Frecuencia Cardiaca
              </label>
              <div className='col-sm-10'>
                <input
                  className='form-control'
                  id='exampleFormControlTextarea1'
                  rows='5'
                  name='freCardiaca'
                  value={input.freCardiaca}
                  onChange={handleInputChange}
                  placeholder='Frecuencia Cardiaca'
                ></input>
                {errors.freCardiaca && <p>{errors.freCardiaca}</p>}
              </div>
            </div>
            <div className='row mb-3'>
              <label
                htmlFor='inputPassword3'
                className='col-sm-2 col-form-label'
              >
                Presion Sanguinea
              </label>
              <div className='col-sm-10'>
                <input
                  className='form-control'
                  id='exampleFormControlTextarea1'
                  rows='5'
                  name='preSanguinea'
                  value={input.preSanguinea}
                  onChange={handleInputChange}
                  placeholder='Presion Sanguinea'
                ></input>
                {errors.preSanguinea && <p>{errors.preSanguinea}</p>}
              </div>
            </div>
            <div className='row mb-3'>
              <label
                htmlFor='inputPassword3'
                className='col-sm-2 col-form-label'
              >
                Frecuencia Respiratoria
              </label>
              <div className='col-sm-10'>
                <input
                  className='form-control'
                  id='exampleFormControlTextarea1'
                  rows='5'
                  name='freRespiratoria'
                  value={input.freRespiratoria}
                  onChange={handleInputChange}
                  placeholder='Frecuenta respiratoria'
                ></input>
                {errors.freRespiratoria && <p>{errors.freRespiratoria}</p>}
              </div>
            </div>
            <div className='row mb-3'>
              <label
                htmlFor='inputPassword3'
                className='col-sm-2 col-form-label'
              >
                Temperatura
              </label>
              <div className='col-sm-10'>
                <input
                  className='form-control'
                  id='exampleFormControlTextarea1'
                  rows='5'
                  name='temperatura'
                  value={input.temperatura}
                  onChange={handleInputChange}
                  placeholder='Temperatura'
                ></input>
                {errors.temperatura && <p>{errors.temperatura}</p>}
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

export default Sensores;
