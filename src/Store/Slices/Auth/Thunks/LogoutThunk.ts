import { createAsyncThunk } from '@reduxjs/toolkit';
import { allCasesLogout } from '@/Firebase';

export const allCasesLogoutThunk = createAsyncThunk(
  'auth/logout-thunk',
  allCasesLogout
);
