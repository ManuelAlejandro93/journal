import { createAsyncThunk } from '@reduxjs/toolkit';
import { googleLogin } from '@/API';

export const googleLoginThunk = createAsyncThunk(
  'auth/google-login-thunk',
  googleLogin
);
