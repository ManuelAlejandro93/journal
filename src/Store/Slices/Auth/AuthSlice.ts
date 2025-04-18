import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLogged: false
};

const authSlice = createSlice({
  name: 'auth-state',
  initialState,
  reducers: {}
});

export const {} = authSlice.actions;
export const authReducer = authSlice.reducer;
