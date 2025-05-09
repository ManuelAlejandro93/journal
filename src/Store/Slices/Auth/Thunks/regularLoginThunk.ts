import { createAsyncThunk } from '@reduxjs/toolkit';
import { regularLogin } from '@/Firebase';
import { LoginUserInputData } from '@/Interfaces';

export const regularLoginThunk = createAsyncThunk(
  'auth/login-thunk',
  (userData: LoginUserInputData) => regularLogin(userData)
);
