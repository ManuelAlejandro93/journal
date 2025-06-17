import { createAsyncThunk } from '@reduxjs/toolkit';
// import { regularRegister } from '@/Firebase';
import { regularRegister } from '../../../../Firebase/Register/RegularRegister';
// import { RegisterUserInputData } from '@/Interfaces';
import { RegisterUserInputData } from '../../../../Interfaces/Auth/RegisterUserInputData';

export const regularRegisterThunk = createAsyncThunk(
  'auth/regular-register-thunk',
  (userData: RegisterUserInputData) => regularRegister(userData)
);
