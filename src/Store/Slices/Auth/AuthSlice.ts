import { createSlice } from '@reduxjs/toolkit';
import { loginThunk } from '@/Store';
import { LogDataType, LogQueryType } from '@/Interfaces';

const logInitalStatus: LogDataType = {
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
