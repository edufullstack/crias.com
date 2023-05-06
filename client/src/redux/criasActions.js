import axios from 'axios';
import { addCow, getSick } from './criasSlice';

export const getSickCow = () => {
  return async (dispatch) => {
    try {
      let crias = await axios(`/crias/`);
      if (typeof crias === 'string') {
        alert(crias);
      } else {
        return dispatch(getSick(crias));
      }
    } catch (error) {
      alert('No se encontraron registros');
    }
  };
};

export const registroNuevo = (input) => {
  return async (dispatch) => {
    try {
      let registro = await axios.post('/crias/', input);
      if (registro.status === 200) {
        alert('Registro exitoso');
      }
      console.log(registro);
      return dispatch(addCow(registro));
    } catch (error) {
      alert('No se pudo registrar');
    }
  };
};
