import { createAsyncThunk } from '@reduxjs/toolkit';
import { login } from '@/API';

export const loginThunk = createAsyncThunk('auth/login-thunk', login);
