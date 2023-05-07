import axios from 'axios';
import { addCow, getSick } from './criasSlice';

export const getSickCow = () => {
  return async (dispatch) => {
    try {
      let crias = await axios(`/crias/`);
      return dispatch(getSick(crias.data));
    } catch (error) {
      alert('No se encontraron registros');
    }
  };
};

export const registroNuevo = (input) => {
  return async (dispatch) => {
    try {
      let registro = await axios.post('/crias/', input);
      if (registro.data.length > 0) {
        alert('Registro exitoso');
      }
      return dispatch(addCow(registro));
    } catch (error) {
      alert('No se pudo registrar');
    }
  };
};

export const actualizaSalud = (input) => {
  return async (dispatch) => {
    try {
      let registro = await axios.put('/crias/', input);
      return dispatch(addCow(registro));
    } catch (error) {
      alert('No se pudo registrar');
    }
  };
};
