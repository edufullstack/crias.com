import React from 'react';
import { useDispatch } from 'react-redux';

const CardEnfermas = (props) => {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>{props.identificador}</h2>
      <p>{props.proveedor}</p>
      <p>{props.fecha} de registro</p>
      <p>{props.peso}</p>
      <p>{props.costo}</p>
      <p>{props.nombre}</p>
      <p>{props.descripcion}</p>
      <p>{props.saludable}</p>
      <p>{props.dieta}</p>
      <p>{props.tratamiento}</p>
      <button> Modificar dieta</button>
      <label>Ingresar nueva dieta</label>
      <input />
      <button>Actualizar dieta</button>
      <button> Modificar tratamiento</button>
      <label>Ingresar nuevo tratamiento</label>
      <input />
      <button>Actualizar tratamiento</button>
    </div>
  );
};

export default CardEnfermas;
