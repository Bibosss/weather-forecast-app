import { createSlice } from '@reduxjs/toolkit';
import { fetchWeather } from './api';

const initialState = {
  data: null,
  loading: false,
  error: null,
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchWeather.pending, state => {
        state.error = null;
        state.loading = true;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.error = null;
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const weatherReducer = weatherSlice.reducer;

export const selectData = state => state.weather.data;
export const selectLoading = state => state.weather.loading;
export const selectError = state => state.weather.error;
