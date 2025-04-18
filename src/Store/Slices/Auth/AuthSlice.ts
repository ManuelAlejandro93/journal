import { createSlice } from '@reduxjs/toolkit';
import { loginThunk } from '@/Store';

interface LogStatusType {
  displayName: string | null;
  email: string | null;
  errorMessage: string | null;
  photoURL: string | null;
  status: 'checking' | 'non-authenticated' | 'authenticated';
  uuid: string | null;
}

interface LogQueryType {
  data: LogStatusType | null;
  state: 'fulfilled' | 'rejected' | 'pending' | null;
  errorMessage: 'firebase-error-message.' | null;
}

const logInitalStatus: LogStatusType = {
  displayName: null,
  email: null,
  errorMessage: null,
  photoURL: null,
  status: 'checking',
  uuid: null
};

const initialLogQueryState: LogQueryType = {
  data: logInitalStatus,
  state: null,
  errorMessage: null
};

const authSlice = createSlice({
  name: 'auth-state',
  initialState: initialLogQueryState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(loginThunk.fulfilled, (loginQueryState) => {
      loginQueryState.state = 'fulfilled';
    });
    builder.addCase(loginThunk.rejected, (loginQueryState) => {
      loginQueryState.state = 'rejected';
    });
    builder.addCase(loginThunk.pending, (loginQueryState) => {
      loginQueryState.state = 'pending';
    });
  }
});

export const authReducer = authSlice.reducer;
