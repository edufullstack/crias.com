import axios from 'axios';
import { addCow, getSick } from './criasSlice';

export const getSickCow = () => {
  return async (dispatch) => {
    try {
      let crias = await axios(`/crias/`);
      console.log(crias.data);
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
      if (registro.data.status === 200) {
        alert('Registro exitoso');
      }
      return dispatch(addCow(registro));
    } catch (error) {
      alert('No se pudo registrar');
    }
  };
};
