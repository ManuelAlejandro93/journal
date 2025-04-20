import { createAsyncThunk } from '@reduxjs/toolkit';
import { emailLogin } from '@/Firebase';

export const emailLoginThunk = createAsyncThunk('auth/login-thunk', emailLogin);
