import { createSlice } from '@reduxjs/toolkit';

export const usuarioSlice = createSlice({
  name: 'usuario',
  initialState: {
    id: '',
    rol: '',
  },
  reducers: {
    getRol: (state, action) => {
      return {
        ...state,
        id: action.payload.id,
        rol: action.payload.rol,
      };
    },
    addUser: (state, action) => {
      return {
        ...state,
      };
    },
    userOut: (state, action) => {
      return {
        ...state,
        id: '',
        rol: '',
      };
    },
  },
});

export const { getRol, addUser, userOut } = usuarioSlice.actions;

export default usuarioSlice.reducer;
