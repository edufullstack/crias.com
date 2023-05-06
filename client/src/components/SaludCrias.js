import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardEnfermas from './cardEnfermas';
import { getSickCow } from '../redux/criasActions';

const SaludCrias = () => {
  const dispatch = useDispatch();
  const crias = useSelector((state) => state.crias.crias);
  const [show, setShow] = useState(false);

  useEffect(() => {
    dispatch(getSickCow());
  }, []);

  const handleClick = () => {
    setShow(!show);
  };
  //separar crias enfermas y por enfermarse, cambiar modelo no es boolean debe tener saludable, por enfermarse, enferma,

  return (
    <div>
      <h2>salud crias</h2>
      <button onClick={handleClick}>Mostrar/Ocultar crias enfermas</button>
      {Array.isArray(crias) && crias.length === 0 ? (
        <h4>No hay crias enfermas</h4>
      ) : (
        Array.isArray(crias) &&
        crias?.map((cria) => {
          return cria.saludable === false ? (
            <CardEnfermas
              key={cria.identificador}
              identificador={cria.identificador}
              proveedor={cria.proveedor}
              fecha={cria.fecha}
              peso={cria.peso}
              costo={cria.costo}
              nombre={cria.nombre}
              descripcion={cria.descripcion}
              saludable={cria.saludable}
              dieta={cria.dieta}
              tratamiento={cria.tratamiento}
            />
          ) : null;
        })
      )}
    </div>
  );
};

export default SaludCrias;
