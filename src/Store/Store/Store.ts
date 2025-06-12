import { configureStore } from '@reduxjs/toolkit';
import { authReducer, journalReducer } from '../Slices';

export const store = configureStore({
  reducer: { authReducer: authReducer, journalReducer }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
