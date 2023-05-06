import { createSlice } from '@reduxjs/toolkit';

export const usuarioSlice = createSlice({
  name: 'usuario',
  initialState: {
    rol: '',
  },
  reducers: {
    getRol: (state, action) => {
      return {
        ...state,
        rol: action.payload,
      };
    },
    addUser: (state, action) => {
      return {
        ...state,
      };
    },
  },
});

export const { getRol, addUser } = usuarioSlice.actions;

export default usuarioSlice.reducer;
