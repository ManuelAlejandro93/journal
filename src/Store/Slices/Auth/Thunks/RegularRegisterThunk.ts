import { createAsyncThunk } from '@reduxjs/toolkit';
import { regularRegister } from '@/Firebase';
import { RegisterUserInputData } from '@/Interfaces';

export const regularRegisterThunk = createAsyncThunk(
  'auth/regular-register-thunk',
  (userData: RegisterUserInputData) => regularRegister(userData)
);
