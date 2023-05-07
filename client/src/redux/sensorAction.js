import axios from 'axios';
import { postSensor, getSensor } from './sensorSlice';

export const getData = () => {
  return async (dispatch) => {
    try {
      let crias = await axios(`/sensor/`);
      return dispatch(getSensor(crias.data));
    } catch (error) {
      alert('No se encontraron registros');
    }
  };
};

export const addSensor = (input) => {
  return async (dispatch) => {
    try {
      let registro = await axios.post('/sensor/', input);
      if (registro.status === 200) {
        alert('Registro exitoso');
      }
      return dispatch(postSensor(registro.data));
    } catch (error) {
      alert('No se pudo registrar');
    }
  };
};
