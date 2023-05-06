import { createSlice } from '@reduxjs/toolkit';

export const criasSlice = createSlice({
  name: 'crias',
  initialState: {
    fecha: '',
    peso: '',
    costo: '',
    nomber: '',
    description: '',
    saludable: '',
    dieta: '',
    tratamiento: '',
  },
  reducers: {
    addCow: (state, action) => {
      return {
        ...state,
      };
    },
    getRol: (state, action) => {
      return {
        ...state,
        rol: action.payload.rol,
      };
    },
  },
});

export const { addCow, addUser } = criasSlice.actions;

export default criasSlice.reducer;
