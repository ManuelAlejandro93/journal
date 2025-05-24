import { createSlice } from '@reduxjs/toolkit';

import { noteInitialData } from '@/Data';
import { addNewEmptyNoteThunk } from '@/Store';

const journalSlice = createSlice({
  name: 'journal-state',
  initialState: noteInitialData,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(addNewEmptyNoteThunk.fulfilled, (noteState, action) => {
      noteState!.httpInfo.hasError = false;
      noteState!.httpInfo.errorMessage = null;
      noteState!.httpInfo.isFetching = false;
      noteState.isSavingInDB = false;
      noteState.allNotes.unshift(action.payload);
      noteState.activeNote = { ...action.payload };
    });
    builder.addCase(addNewEmptyNoteThunk.rejected, (noteState, action) => {
      noteState!.httpInfo.hasError = true;
      noteState!.httpInfo.errorMessage = action.error.message!;
      noteState!.httpInfo.isFetching = false;
      noteState.isSavingInDB = false;
    });
    builder.addCase(addNewEmptyNoteThunk.pending, (noteState) => {
      noteState!.httpInfo.hasError = false;
      noteState!.httpInfo.errorMessage = null;
      noteState!.httpInfo.isFetching = true;
      noteState.isSavingInDB = false;
    });
  }
});

export const journalReducer = journalSlice.reducer;
export const {} = journalSlice.actions;
