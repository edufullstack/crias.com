import { createSlice } from '@reduxjs/toolkit';

export const sensorSlice = createSlice({
  name: 'sensor',
  initialState: {
    sensor: [],
  },
  reducers: {
    postSensor: (state, action) => {
      return {
        ...state,
      };
    },
    getSensor: (state, action) => {
      return {
        ...state,
        crias: action.payload,
      };
    },
  },
});

export const { postSensor, getSensor } = sensorSlice.actions;

export default sensorSlice.reducer;
