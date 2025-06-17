import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// import {
//   allCasesLogoutThunk,
//   googleLoginAndRegisterThunk,
//   regularRegisterThunk,
//   regularLoginThunk
// } from '@/Store';

import { allCasesLogoutThunk } from './Thunks/LogoutThunk';
import { googleLoginAndRegisterThunk } from './Thunks/GoogleLoginAndRegisterThunk';
import { regularRegisterThunk } from './Thunks/RegularRegisterThunk';
import { regularLoginThunk } from './Thunks/regularLoginThunk';

// import { logQueryInitialState } from '@/Data';
import { logQueryInitialState } from '../../../Data/Auth/LogQueryInitialState';

// import { saveUserOnLS, deleteUserOnLS } from '@/Helpers';
import { saveUserOnLS } from '../../../Helpers/LocalStorageFn/SaveUserOnLS';
import { deleteUserOnLS } from '../../../Helpers/LocalStorageFn/DeleteUserOnLS';

// import { LogDataType } from '@/Interfaces';
import { LogDataType } from '../../../Interfaces/Auth/LogDataType';

export const authSlice = createSlice({
  name: 'auth-state',
  initialState: logQueryInitialState,
  reducers: {
    onUserExistsOnLS(state, action: PayloadAction<LogDataType>) {
      state.state = 'fulfilled';
      state.errorMessage = null;
      state.data = { ...action.payload };
    },
    onUserNotExistsOnLS(state) {
      state.state = 'fulfilled';
      state.errorMessage = null;
      state.data!.dataStatus = 'non-authenticated';
      state.data!.displayName = '';
      state.data!.displayName = null;
      state.data!.email = null;
      state.data!.errorMessage = null;
      state.data!.uuid = null;
    }
  },
  extraReducers(builder) {
    //! Google login and register
    builder.addCase(
      googleLoginAndRegisterThunk.fulfilled,
      (logQueryState, action) => {
        logQueryState.state = 'fulfilled';
        logQueryState.errorMessage = null;
        logQueryState.data!.dataStatus = 'authenticated';
        logQueryState.data!.displayName = action.payload.name;
        logQueryState.data!.email = action.payload.email;
        logQueryState.data!.errorMessage = null;
        logQueryState.data!.photoURL = action.payload.photo;
        logQueryState.data!.uuid = action.payload.uuid;
        saveUserOnLS({
          dataStatus: logQueryState.data!.dataStatus,
          displayName: logQueryState.data!.displayName,
          email: logQueryState.data!.email,
          errorMessage: logQueryState.data!.errorMessage,
          photoURL: logQueryState.data!.photoURL,
          uuid: logQueryState.data!.uuid
        });
      }
    );
    builder.addCase(
      googleLoginAndRegisterThunk.rejected,
      (logQueryState, action) => {
        logQueryState.state = 'rejected';
        logQueryState.errorMessage = action.error.message;
        logQueryState.data!.dataStatus = 'non-authenticated';
        logQueryState.data!.displayName = null;
        logQueryState.data!.email = null;
        logQueryState.data!.errorMessage =
          action.error.message ?? 'Error en firebase, hable con TI.';
        logQueryState.data!.photoURL = null;
        logQueryState.data!.uuid = null;
      }
    );
    builder.addCase(googleLoginAndRegisterThunk.pending, (logQueryState) => {
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
    builder.addCase(regularLoginThunk.fulfilled, (logQueryState, action) => {
      logQueryState.state = 'fulfilled';
      logQueryState.errorMessage = null;
      logQueryState.data!.dataStatus = 'authenticated';
      logQueryState.data!.displayName = action.payload.name;
      logQueryState.data!.email = action.payload.email;
      logQueryState.data!.errorMessage = null;
      logQueryState.data!.photoURL = action.payload.photo;
      logQueryState.data!.uuid = action.payload.uuid;
      saveUserOnLS({
        dataStatus: logQueryState.data!.dataStatus,
        displayName: logQueryState.data!.displayName,
        email: logQueryState.data!.email,
        errorMessage: logQueryState.data!.errorMessage,
        photoURL: logQueryState.data!.photoURL,
        uuid: logQueryState.data!.uuid
      });
    });
    builder.addCase(regularLoginThunk.rejected, (logQueryState, action) => {
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
    builder.addCase(regularLoginThunk.pending, (logQueryState) => {
      logQueryState.state = 'pending';
      logQueryState.errorMessage = null;
      logQueryState.data!.dataStatus = 'checking';
      logQueryState.data!.displayName = null;
      logQueryState.data!.email = null;
      logQueryState.data!.errorMessage = null;
      logQueryState.data!.photoURL = null;
      logQueryState.data!.uuid = null;
    });

    //! Regular registration
    builder.addCase(regularRegisterThunk.fulfilled, (logQueryState, action) => {
      logQueryState.state = 'fulfilled';
      logQueryState.errorMessage = null;
      logQueryState.data!.dataStatus = 'authenticated';
      logQueryState.data!.displayName = action.payload.name;
      logQueryState.data!.email = action.payload.email;
      logQueryState.data!.errorMessage = null;
      logQueryState.data!.photoURL = action.payload.photo;
      logQueryState.data!.uuid = action.payload.uuid;
      saveUserOnLS({
        dataStatus: logQueryState.data!.dataStatus,
        displayName: logQueryState.data!.displayName,
        email: logQueryState.data!.email,
        errorMessage: logQueryState.data!.errorMessage,
        photoURL: logQueryState.data!.photoURL,
        uuid: logQueryState.data!.uuid
      });
    });
    builder.addCase(regularRegisterThunk.rejected, (logQueryState, action) => {
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
      logQueryState.state = 'pending';
      logQueryState.errorMessage = null;
      logQueryState.data!.dataStatus = 'checking';
      logQueryState.data!.displayName = null;
      logQueryState.data!.email = null;
      logQueryState.data!.errorMessage = null;
      logQueryState.data!.photoURL = null;
      logQueryState.data!.uuid = null;
    });

    builder.addCase(allCasesLogoutThunk.fulfilled, (logQueryState) => {
      logQueryState.state = 'fulfilled';
      logQueryState.errorMessage = null;
      logQueryState.data!.dataStatus = 'non-authenticated';
      logQueryState.data!.displayName = null;
      logQueryState.data!.email = null;
      logQueryState.data!.errorMessage = null;
      logQueryState.data!.photoURL = null;
      logQueryState.data!.uuid = null;
      deleteUserOnLS();
    });
    builder.addCase(allCasesLogoutThunk.rejected, (logQueryState, action) => {
      logQueryState.state = 'rejected';
      logQueryState.errorMessage = action.error.message;
      logQueryState.data!.dataStatus = 'non-authenticated';
      logQueryState.data!.displayName = null;
      logQueryState.data!.email = null;
      logQueryState.data!.errorMessage = null;
      logQueryState.data!.photoURL = null;
      logQueryState.data!.uuid = null;
      deleteUserOnLS();
    });
    builder.addCase(allCasesLogoutThunk.pending, (state) => {
      state.state = 'pending';
      state.errorMessage = null;
      state.data!.dataStatus = 'checking';
      state.data!.displayName = null;
      state.data!.email = null;
      state.data!.errorMessage = null;
      state.data!.photoURL = null;
      state.data!.uuid = null;

      deleteUserOnLS();
    });
  }
});

export const authReducer = authSlice.reducer;
export const { onUserExistsOnLS, onUserNotExistsOnLS } = authSlice.actions;
