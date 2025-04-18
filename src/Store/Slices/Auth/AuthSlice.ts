import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
  displayName: string | null;
  email: string | null;
  errorMessage: string | null;
  photoURL: string | null;
  status: 'checking' | 'non-authenticated' | 'authenticated';
  uuid: string | null;
}

const initialState: InitialState = {
  displayName: null,
  email: null,
  errorMessage: null,
  photoURL: null,
  status: 'checking',
  uuid: null
};

const authSlice = createSlice({
  name: 'auth-state',
  initialState,
  reducers: {}
});

export const {} = authSlice.actions;
export const authReducer = authSlice.reducer;
