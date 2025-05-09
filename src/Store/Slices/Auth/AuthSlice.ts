import { createSlice } from '@reduxjs/toolkit';
import {
  allCasesLogoutThunk,
  googleLoginThunk,
  regularRegisterThunk
} from '@/Store';
import { logQueryInitialState } from '@/Data';

const authSlice = createSlice({
  name: 'auth-state',
  initialState: logQueryInitialState,
  reducers: {},
  extraReducers(builder) {
    //! Google login
    builder.addCase(googleLoginThunk.fulfilled, (logQueryState, action) => {
      logQueryState.state = 'fulfilled';
      logQueryState.errorMessage = null;
      logQueryState.data!.dataStatus = 'authenticated';
      logQueryState.data!.displayName = action.payload.name;
      logQueryState.data!.email = action.payload.email;
      logQueryState.data!.errorMessage = null;
      logQueryState.data!.photoURL = action.payload.photo;
      logQueryState.data!.uuid = action.payload.uuid;
    });
    builder.addCase(googleLoginThunk.rejected, (logQueryState, action) => {
      logQueryState.state = 'rejected';
      logQueryState.errorMessage = action.error.message;
      logQueryState.data!.dataStatus = 'non-authenticated';
      logQueryState.data!.displayName = null;
      logQueryState.data!.email = null;
      logQueryState.data!.errorMessage =
        action.error.message ?? 'Error en firebase, hable con TI.';
      logQueryState.data!.photoURL = null;
      logQueryState.data!.uuid = null;
    });
    builder.addCase(googleLoginThunk.pending, (logQueryState) => {
      logQueryState.state = 'pending';
      logQueryState.errorMessage = null;
      logQueryState.data!.dataStatus = 'checking';
      logQueryState.data!.displayName = null;
      logQueryState.data!.email = null;
      logQueryState.data!.errorMessage = null;
      logQueryState.data!.photoURL = null;
      logQueryState.data!.uuid = null;
    });

    //! Email login
    builder.addCase(regularRegisterThunk.fulfilled, (logQueryState) => {
      logQueryState.state = 'fulfilled';
      logQueryState.data!.dataStatus = 'authenticated';
    });
    builder.addCase(regularRegisterThunk.rejected, (logQueryState, action) => {
      logQueryState.state = 'rejected';
      logQueryState.data!.dataStatus = 'non-authenticated';
      logQueryState.errorMessage = action.error.message;
    });
    builder.addCase(regularRegisterThunk.pending, (logQueryState) => {
      logQueryState.state = 'pending';
      logQueryState.data!.dataStatus = 'checking';
    });

    //! Regular registration
    builder.addCase(regularRegisterThunk.fulfilled, (logQueryState, action) => {
      // todo: cambiar esto.
      logQueryState.state = 'fulfilled';
      logQueryState.errorMessage = null;
      logQueryState.data!.dataStatus = 'authenticated';
      logQueryState.data!.displayName = action.payload.name;
      logQueryState.data!.email = action.payload.email;
      logQueryState.data!.errorMessage = null;
      logQueryState.data!.photoURL = action.payload.photo;
      logQueryState.data!.uuid = action.payload.uuid;
    });
    builder.addCase(regularRegisterThunk.rejected, (logQueryState, action) => {
      // todo: cambiar esto.
      logQueryState.state = 'rejected';
      logQueryState.errorMessage = action.error.message;
      logQueryState.data!.dataStatus = 'non-authenticated';
      logQueryState.data!.displayName = null;
      logQueryState.data!.email = null;
      logQueryState.data!.errorMessage = null;
      logQueryState.data!.photoURL = null;
      logQueryState.data!.uuid = null;
    });
    builder.addCase(regularRegisterThunk.pending, (logQueryState) => {
      // todo: cambiar esto.
      logQueryState.state = 'pending';
      logQueryState.errorMessage = null;
      logQueryState.data!.dataStatus = 'checking';
      logQueryState.data!.displayName = null;
      logQueryState.data!.email = null;
      logQueryState.data!.errorMessage = null;
      logQueryState.data!.photoURL = null;
      logQueryState.data!.uuid = null;
    });

    //! All cases logout
    builder.addCase(allCasesLogoutThunk.fulfilled, (logQueryState) => {
      logQueryState.state = 'fulfilled';
    });
    builder.addCase(allCasesLogoutThunk.rejected, (logQueryState) => {
      logQueryState.state = 'rejected';
    });
    builder.addCase(allCasesLogoutThunk.pending, (logQueryState) => {
      logQueryState.state = 'pending';
    });
  }
});

export const authReducer = authSlice.reducer;

//.
