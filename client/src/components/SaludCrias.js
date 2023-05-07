import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardEnfermas from './cardEnfermas';
import { getSickCow } from '../redux/criasActions';
import styles from './salud.module.css';

const SaludCrias = () => {
  const dispatch = useDispatch();
  const crias = useSelector((state) => state.crias.crias);

  const handleClick = () => {
    dispatch(getSickCow());
  };

  return (
    <div className='bg-white mx-auto my-5 p-3 shadow-lg rounded'>
      <h2 className='pb-2'>Salud crias</h2>
      <button onClick={handleClick}>Mostrar crias enfermas</button>

      {Array.isArray(crias) &&
        crias
          .filter((cria) => !cria.saludable)
          .map((cria) => {
            return (
              <div className={styles.cardContainer} key={cria.identificador}>
                <CardEnfermas
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
                  cuarentena={cria.cuarentena}
                />
              </div>
            );
          })}
    </div>
  );
};

export default SaludCrias;
