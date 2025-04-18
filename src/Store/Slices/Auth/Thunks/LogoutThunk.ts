import { createAsyncThunk } from '@reduxjs/toolkit';
import { logout } from '@/API';

export const logoutThunk = createAsyncThunk('auth/logout-thunk', logout);
