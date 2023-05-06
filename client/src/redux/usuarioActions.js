import axios from 'axios';
import { getRol, addUser } from './usuarioSlice';

export const getUsuario = (id) => {
  return async (dispatch) => {
    try {
      const usuario = await axios.get(`/usuario/${id.id}`);
      return dispatch(getRol(usuario.data.rol));
    } catch (error) {
      alert('Usuario no encontrado');
    }
  };
};

export const registrarUsuario = (usuario) => {
  return async (dispatch) => {
    try {
      const registro = await axios.post('/usuario/', usuario);
      return dispatch(addUser(registro));
    } catch (error) {
      alert('No fue posible registrar usuario');
    }
  };
};
