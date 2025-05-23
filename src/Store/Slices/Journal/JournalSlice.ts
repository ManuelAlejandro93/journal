import { createSlice } from '@reduxjs/toolkit';

import { noteInitialData } from '@/Data';
import { addNewEmptyNoteThunk } from '@/Store';

const journalSlice = createSlice({
  name: 'journal-state',
  initialState: noteInitialData,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(addNewEmptyNoteThunk.fulfilled, (noteState) => {
      noteState!.httpInfo.hasError = false;
      noteState!.httpInfo.errorMessage = null;
      noteState!.httpInfo.isFetching = false;
    });
    builder.addCase(addNewEmptyNoteThunk.rejected, (noteState) => {
      noteState!.httpInfo.hasError = true;
      //todo cambiar el error por el error del action.
      noteState!.httpInfo.errorMessage = 'error del action';
      noteState!.httpInfo.isFetching = false;
    });
    builder.addCase(addNewEmptyNoteThunk.pending, (noteState) => {
      noteState!.httpInfo.hasError = false;
      noteState!.httpInfo.errorMessage = null;
      noteState!.httpInfo.isFetching = true;
    });
  }
});

export const journalReducer = journalSlice.reducer;
export const {} = journalSlice.actions;
