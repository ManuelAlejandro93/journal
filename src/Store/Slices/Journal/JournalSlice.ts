import { createSlice } from '@reduxjs/toolkit';

import { journalInitialData } from '@/Data';

const journalSlice = createSlice({
  name: 'journal-state',
  initialState: journalInitialData,
  reducers: {}
});

export const journalReducer = journalSlice.reducer;
export const {} = journalSlice.actions;
