import { createSlice } from '@reduxjs/toolkit';
import { loginThunk } from '@/Store';
import { logQueryInitialState } from '@/Data';

const authSlice = createSlice({
  name: 'auth-state',
  initialState: logQueryInitialState,
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
