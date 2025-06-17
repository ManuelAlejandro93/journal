import { createAsyncThunk } from '@reduxjs/toolkit';
// import { allCasesLogout } from '@/Firebase';
import { allCasesLogout } from '../../../../Firebase/Logout/allCasesLogout';

export const allCasesLogoutThunk = createAsyncThunk(
  'auth/logout-thunk',
  allCasesLogout
);
