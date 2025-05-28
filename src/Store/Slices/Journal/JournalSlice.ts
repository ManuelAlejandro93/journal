import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { noteInitialData } from '@/Data';
import {
  addNewEmptyNoteThunk,
  getAllNotesThunk,
  updateSingleNoteByIDThunk
} from '@/Store';
import { Note } from '@/Interfaces';

const journalSlice = createSlice({
  name: 'journal-state',
  initialState: noteInitialData,
  reducers: {
    setActiveNote(state, action: PayloadAction<Note>) {
      state.activeNote.body = action.payload.body;
      state.activeNote.date = action.payload.date;
      state.activeNote.noteId = action.payload.noteId;
      state.activeNote.title = action.payload.title;
    },
    onChangeActiveNoteTitle(
      state,
      action: PayloadAction<{ newString: string; uuid: string }>
    ) {
      //actualizo el body activa
      state.activeNote.title = action.payload.newString;
      //actualizo todas los body
      state.allNotes = state.allNotes.map((note) => {
        if (note.noteId === action.payload.uuid) {
          return { ...note, title: action.payload.newString };
        } else return note;
      });
    },
    onChangeActiveNoteBody(
      state,
      action: PayloadAction<{ newString: string; uuid: string }>
    ) {
      //actualizo el body activa
      state.activeNote.body = action.payload.newString;
      //actualizo todas los body
      state.allNotes = state.allNotes.map((note) => {
        if (note.noteId === action.payload.uuid) {
          return { ...note, body: action.payload.newString };
        } else return note;
      });
    }
  },
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
    builder.addCase(updateSingleNoteByIDThunk.fulfilled, (noteState) => {
      noteState!.httpInfo.hasError = false;
      noteState!.httpInfo.errorMessage = null;
      noteState!.httpInfo.isFetching = false;
      noteState.isSavingInDB = false;
      noteState.dbSavingMessage = 'ok-on-updating-single-note-by-id';
    });

    builder.addCase(updateSingleNoteByIDThunk.rejected, (noteState, action) => {
      noteState!.httpInfo.hasError = true;
      noteState!.httpInfo.errorMessage = action.error.message!;
      noteState!.httpInfo.isFetching = false;
      noteState.dbSavingMessage = 'error-on-updating-single-note-by-id';
    });

    builder.addCase(updateSingleNoteByIDThunk.pending, (noteState) => {
      noteState!.httpInfo.hasError = false;
      noteState!.httpInfo.errorMessage = null;
      noteState!.httpInfo.isFetching = true;
      noteState.dbSavingMessage = 'pending-on-updating-single-note-by-id';
    });
  }
});

export const journalReducer = journalSlice.reducer;
export const {
  setActiveNote,
  onChangeActiveNoteBody,
  onChangeActiveNoteTitle
} = journalSlice.actions;
