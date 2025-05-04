import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from '../Slices';

export const Store = () => {};

export const store = configureStore({
  reducer: { authReducer: authReducer }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
