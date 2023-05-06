import axios from 'axios';
import { addCow } from './criasSlice';

export const registroNuevo = (input) => {
  return async (dispatch) => {
    try {
      let registro = await axios.post('/crias/', input);
      if (registro.data.message === 'Registro exitoso') {
        alert('Registro exitoso');
      }
      return dispatch(addCow(registro));
    } catch (error) {
      alert('No se pudo registrar');
    }
  };
};
