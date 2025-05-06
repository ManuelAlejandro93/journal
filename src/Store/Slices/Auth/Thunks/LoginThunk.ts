import { createAsyncThunk } from '@reduxjs/toolkit';
import { regularLogin } from '@/Firebase';

export const emailLoginThunk = createAsyncThunk(
  'auth/login-thunk',
  regularLogin
);
