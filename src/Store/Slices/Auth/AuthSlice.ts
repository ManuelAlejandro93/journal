import { createSlice } from '@reduxjs/toolkit';
import { loginThunk, logoutThunk } from '@/Store';
import { logQueryInitialState } from '@/Data';

const authSlice = createSlice({
  name: 'auth-state',
  initialState: logQueryInitialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(loginThunk.fulfilled, (logQueryState) => {
      logQueryState.state = 'fulfilled';
      logQueryState.data!.dataStatus = 'authenticated';
      logQueryState.data!.displayName = 'Morty Smith';
    });
    builder.addCase(loginThunk.rejected, (logQueryState, action) => {
      logQueryState.state = 'rejected';
      logQueryState.data!.dataStatus = 'non-authenticated';
      logQueryState.errorMessage = action.error.message;
    });
    builder.addCase(loginThunk.pending, (logQueryState) => {
      logQueryState.state = 'pending';
      logQueryState.data!.dataStatus = 'checking';
    });
    builder.addCase(logoutThunk.fulfilled, (logQueryState) => {
      logQueryState.state = 'fulfilled';
    });
    builder.addCase(logoutThunk.rejected, (logQueryState) => {
      logQueryState.state = 'rejected';
    });
    builder.addCase(logoutThunk.pending, (logQueryState) => {
      logQueryState.state = 'pending';
    });
  }
});

export const authReducer = authSlice.reducer;
