import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import ValidateSensor from './validateSensor';
import { addSensor } from '../redux/sensorAction';
import { actualizaSalud } from '../redux/criasActions';

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

    const currentInput = { ...input }; // guardar estado actual
    if (currentInput.temperatura > 37.5 && currentInput.temperatura < 39.5) {
      currentInput.saludable = true;
    } else {
      currentInput.saludable = false;
    }
    if (currentInput.freCardiaca > 70 && currentInput.freCardiaca < 80) {
      currentInput.saludable = true;
    } else {
      currentInput.saludable = false;
    }
    if (
      currentInput.freRespiratoria > 15 &&
      currentInput.freRespiratoria < 20
    ) {
      currentInput.saludable = true;
    } else {
      currentInput.saludable = false;
    }
    if (currentInput.preSanguinea > 8 && currentInput.preSanguinea < 10) {
      currentInput.saludable = true;
    } else {
      currentInput.saludable = false;
    }
    currentInput[event.target.name] = event.target.value; // actualizar el valor de la propiedad cambiada
    setInput(currentInput); // actualizar el estado con el nuevo objeto
    setErrors(
      ValidateSensor({
        ...currentInput,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.saludable === false) {
      dispatch(actualizaSalud(input));
    }
    dispatch(addSensor(input));
    setInput({
      identificador: '',
      freCardiaca: '',
      preSanguinea: '',
      freRespiratoria: '',
      temperatura: '',
      saludable: '',
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
              <h3>Registrar Sensor</h3>
              <div className='row mb-3'>
                <label
                  htmlFor='inputPassword3'
                  className='col-sm-2 col-form-label'
                ></label>
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
                ></label>
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
                ></label>
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
                ></label>
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
                ></label>
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
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Sensores;
