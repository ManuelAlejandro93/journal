import { createAsyncThunk } from '@reduxjs/toolkit';
import { googleLogin } from '@/Firebase';

export const googleLoginAndRegisterThunk = createAsyncThunk(
  'auth/google-login-thunk',
  googleLogin
);
