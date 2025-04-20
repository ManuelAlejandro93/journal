import { createAsyncThunk } from '@reduxjs/toolkit';
import { emailLogin } from '@/API';

export const loginThunk = createAsyncThunk('auth/login-thunk', emailLogin);
