import { createAsyncThunk } from '@reduxjs/toolkit';
// import { regularLogin } from '@/Firebase';
import { regularLogin } from '../../../../Firebase/Login/RegularLogin';
// import { LoginUserInputData } from '@/Interfaces';
import { LoginUserInputData } from '../../../../Interfaces/Auth/LoginUserInputData';

export const regularLoginThunk = createAsyncThunk(
  'auth/regular-login-thunk',
  (userData: LoginUserInputData) => regularLogin(userData)
);
