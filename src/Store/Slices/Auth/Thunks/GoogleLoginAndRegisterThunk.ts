import { createAsyncThunk } from '@reduxjs/toolkit';
// import { googleLogin } from '@/Firebase';
import { googleLogin } from '../../../../Firebase/Login/GoogleLogin';

export const googleLoginAndRegisterThunk = createAsyncThunk(
  'auth/google-login-thunk',
  googleLogin
);
