// src/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    error: '',
  },
  reducers: {
    loginSuccess(state) {
      state.isAuthenticated = true;
      state.error = '';
    },
    loginFailure(state, action) {
      state.isAuthenticated = false;
      state.error = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.error = '';
    },
  },
});

export const { loginSuccess, loginFailure, logout } = authSlice.actions;
export default authSlice.reducer;
