import { createSlice } from '@reduxjs/toolkit';

import { noteInitialData } from '@/Data';
import { addNewEmptyNoteThunk, getAllNotesThunk } from '@/Store';

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
      noteState.isThereActiveNote = true;
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
    builder.addCase(getAllNotesThunk.fulfilled, (noteState, action) => {
      noteState!.httpInfo.hasError = false;
      noteState!.httpInfo.errorMessage = null;
      noteState!.httpInfo.isFetching = false;
      noteState.isSavingInDB = false;
      noteState.isThereActiveNote = true;
      noteState.allNotes = action.payload;
      noteState.activeNote.body = action.payload[0].body;
      noteState.activeNote.date = action.payload[0].date;
      noteState.activeNote.noteId = action.payload[0].noteId;
      noteState.activeNote.noteId = action.payload[0].noteId;
      noteState.activeNote.title = action.payload[0].title;
    });

    builder.addCase(getAllNotesThunk.rejected, (noteState, action) => {
      noteState!.httpInfo.hasError = true;
      noteState!.httpInfo.errorMessage = action.error.message!;
      noteState!.httpInfo.isFetching = false;
      //!no hay notas.
      noteState!.allNotes = [];
    });

    builder.addCase(getAllNotesThunk.pending, (noteState) => {
      noteState!.httpInfo.hasError = false;
      noteState!.httpInfo.errorMessage = null;
      noteState!.httpInfo.isFetching = true;
    });
  }
});

export const journalReducer = journalSlice.reducer;
export const {} = journalSlice.actions;
