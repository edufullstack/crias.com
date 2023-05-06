import axios from 'axios';
import { getRol, addUser } from './usuarioSlice';

export const getUsuario = (user) => {
  return async (dispatch) => {
    try {
      const usuario = await axios.get(
        `/usuario/?id=${user.id}&password=${user.password}`
      );
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
      if (registro.status === 200) {
        alert('Usuario creado con exito');
      }
      return dispatch(addUser(registro));
    } catch (error) {
      alert('No fue posible registrar usuario');
    }
  };
};
