import { createSlice } from '@reduxjs/toolkit';

export const criasSlice = createSlice({
  name: 'crias',
  initialState: {
    // fecha: '',
    // peso: '',
    // costo: '',
    // nomber: '',
    // description: '',
    // saludable: '',
    // dieta: '',
    // tratamiento: '',
    crias: [],
  },
  reducers: {
    addCow: (state, action) => {
      return {
        ...state,
      };
    },
    getSick: (state, action) => {
      return {
        ...state,
        crias: action.payload,
      };
    },
  },
});

export const { addCow, getSick } = criasSlice.actions;

export default criasSlice.reducer;
