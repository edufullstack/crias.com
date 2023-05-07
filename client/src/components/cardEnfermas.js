import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actualizaSalud, getSickCow } from '../redux/criasActions';

const CardEnfermas = (props) => {
  const dispatch = useDispatch();
  const [showDieta, setShowDieta] = useState(false);
  const [showTratamiento, setShowTratamiento] = useState(false);
  const [showCuarentena, setShowCuarentena] = useState(false);
  const [input, setInput] = useState({
    identificador: '',
    dieta: '',
    tratamiento: '',
    cuarentena: '',
  });

  const handleClickDieta = () => {
    setShowDieta(!showDieta);
  };
  const handleClickTratamiento = () => {
    setShowTratamiento(!showTratamiento);
  };
  const handleClickCuarentena = () => {
    setShowCuarentena(!showCuarentena);
  };

  const handleInputChange = (event) => {
    event.preventDefault();

    setInput({
      ...input,
      [event.target.name]: event.target.value,
      identificador: props.identificador,
    });
  };
  const handleUpdate = async () => {
    dispatch(actualizaSalud(input)).then(() => {
      dispatch(getSickCow());
      setInput({
        identificador: '',
        dieta: '',
        tratamiento: '',
        cuarentena: '',
      });
    });
  };

  return (
    <div className='card col-md-4'>
      <div className='card-body'>
        <h2 className='card-title'>Id: {props.identificador}</h2>
        <p className='card-text'>Proveedor: {props.proveedor}</p>
        <p className='card-text'>Fecha: {props.fecha} de registro</p>
        <p className='card-text'>Peso: {props.peso}</p>
        <p className='card-text'>Costo: {props.costo}</p>
        <p className='card-text'>Nombre: {props.nombre}</p>
        <p className='card-text'>Descripcion: {props.descripcion}</p>
        {/* <p className='card-text'>Saludable: {props.saludable}</p> */}
        <p className='card-text'>Dieta: {props.dieta}</p>
        <p className='card-text'>Tratamiento: {props.tratamiento}</p>
        <p className='card-text'>Corral para cuarentena: {props.cuarentena}</p>
        {!showDieta ? (
          <button
            className='btn btn-primary'
            hidden={showDieta}
            onClick={handleClickDieta}
          >
            Modificar dieta
          </button>
        ) : (
          <>
            <label>Ingresar nueva dieta</label>
            <input
              className='form-control'
              name='dieta'
              value={input.dieta}
              onChange={handleInputChange}
            />
            <button className='btn btn-success' onClick={handleUpdate}>
              Actualizar dieta
            </button>
            <button className='btn btn-success' onClick={handleClickDieta}>
              Ocultar
            </button>
          </>
        )}
        {!showTratamiento ? (
          <button className='btn btn-primary' onClick={handleClickTratamiento}>
            Modificar tratamiento
          </button>
        ) : (
          <>
            <label>Ingresar nuevo tratamiento</label>
            <input
              name='tratamiento'
              value={input.tratamiento}
              className='form-control'
              onChange={handleInputChange}
            />
            <button className='btn btn-success' onClick={handleUpdate}>
              Actualizar tratamiento
            </button>
            <button
              className='btn btn-success'
              onClick={handleClickTratamiento}
            >
              Ocultar
            </button>
          </>
        )}
        {!showCuarentena ? (
          <button className='btn btn-primary' onClick={handleClickCuarentena}>
            Modificar Cuarentena
          </button>
        ) : (
          <>
            <label>Ingresar nuevo corral</label>
            <input
              className='form-control'
              name='cuarentena'
              value={input.cuarentena}
              onChange={handleInputChange}
            />
            <button className='btn btn-success' onClick={handleUpdate}>
              Actualizar Cuarentena
            </button>
            <button className='btn btn-success' onClick={handleClickCuarentena}>
              Ocultar
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CardEnfermas;
