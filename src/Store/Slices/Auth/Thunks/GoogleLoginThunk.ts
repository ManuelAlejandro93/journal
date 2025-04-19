import { createAsyncThunk } from '@reduxjs/toolkit';
import { googleLogin } from '@/Firebase';

export const googleLoginThunk = createAsyncThunk(
  'auth/google-login-thunk',
  googleLogin
);
