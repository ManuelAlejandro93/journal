import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { noteInitialData } from '@/Data';
import {
  addNewEmptyNoteThunk,
  getAllNotesThunk,
  updateSingleNoteByIDThunk,
  uploadImageThunk
} from '@/Store';
import { CloudinarySuccessed, NoteInitialData, Note } from '@/Interfaces';

const journalSlice = createSlice({
  name: 'journal-state',
  initialState: noteInitialData,
  reducers: {
    setActiveNote(state, action: PayloadAction<Note>) {
      state.activeNote.date = action.payload.date;
      state.activeNote.noteId = action.payload.noteId;
      state.activeNote.title = action.payload.title;
      state.activeNote.noteId = action.payload.noteId;
      state.activeNote.body = action.payload.body;
      state.activeNote.imgUrls = [
        `Las imgURLS no van a cambiar ni por el putas. ${action.payload.noteId} `
      ];
    },
    onChangeActiveNoteTitle(
      state,
      action: PayloadAction<{ newString: string; noteID: string }>
    ) {
      //actualizo el body activa
      state.activeNote.title = action.payload.newString;
      //actualizo todas los body
      state.allNotes = state.allNotes.map((note) => {
        if (note.noteId === action.payload.noteID) {
          return { ...note, title: action.payload.newString };
        } else return note;
      });
    },
    onChangeActiveNoteBody(
      state,
      action: PayloadAction<{ newString: string; noteID: string }>
    ) {
      //actualizo el body activa
      state.activeNote.body = action.payload.newString;
      //actualizo todas los body
      state.allNotes = state.allNotes.map((note) => {
        if (note.noteId === action.payload.noteID) {
          return { ...note, body: action.payload.newString };
        } else return note;
      });
    }
  },
  extraReducers(builder) {
    builder.addCase(
      addNewEmptyNoteThunk.fulfilled,
      (noteState, action: PayloadAction<Note>) => {
        //Petición http
        noteState!.httpInfo.hasError = false;
        noteState!.httpInfo.errorMessage = null;
        noteState!.httpInfo.isFetching = false;

        //Note informacion
        noteState.isSavingInDB = false;
        noteState.isThereActiveNote = true;

        //active note
        // noteState.activeNote.body = action.payload[0].body;
        // noteState.activeNote.date = action.payload[0].date;
        // noteState.activeNote.title = action.payload[0].title;
        // noteState.activeNote.noteId = action.payload[0].noteId;
        // noteState.activeNote.imgUrls = [];
      }
    );
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
      if (!action.payload || action.payload.length <= 0) {
        //Petición http
        noteState!.httpInfo.isFetching = false;
        noteState!.httpInfo.hasError = false;
        noteState!.httpInfo.errorMessage = null;

        //Note informacion
        noteState.isSavingInDB = false;
        noteState.dbSavingMessage = '';
        noteState.isThereActiveNote = false;

        //active note
        noteState.activeNote.body = null;
        noteState.activeNote.date = null;
        noteState.activeNote.title = null;
        noteState.activeNote.noteId = null;
        noteState.activeNote.imgUrls = [];

        //all notes
        noteState.allNotes = [];
        return;
      }

      //Petición http
      noteState!.httpInfo.hasError = false;
      noteState!.httpInfo.errorMessage = null;
      noteState!.httpInfo.isFetching = false;

      //Note informacion
      noteState.isSavingInDB = false;
      noteState.dbSavingMessage = '';
      noteState.isThereActiveNote = true;

      //active note
      noteState.activeNote.body = action.payload[0].body;
      noteState.activeNote.date = action.payload[0].date;
      noteState.activeNote.title = action.payload[0].title;
      noteState.activeNote.noteId = action.payload[0].noteId;

      //todo: Revisar despues de añadir una nueva nota
      noteState.activeNote.imgUrls = [];

      //todo: Revisar despues de añadir una nueva nota
      //all notes
      if (!action.payload || action.payload.length <= 0) {
        noteState.allNotes = [];
      } else {
        noteState.allNotes = [...action.payload];
      }
    });

    builder.addCase(getAllNotesThunk.rejected, (noteState, action) => {
      //Petición http
      noteState!.httpInfo.hasError = false;
      noteState!.httpInfo.errorMessage = action.error.message as string;
      noteState!.httpInfo.isFetching = false;

      //Note informacion
      noteState.isSavingInDB = false;
      noteState.dbSavingMessage = '';
      noteState.isThereActiveNote = false;

      //active note
      noteState.activeNote.body = null;
      noteState.activeNote.date = null;
      noteState.activeNote.title = null;
      noteState.activeNote.noteId = null;
      noteState.activeNote.imgUrls = [];

      //all notes
      noteState.allNotes = [];
    });

    builder.addCase(getAllNotesThunk.pending, (noteState) => {
      //Petición http
      noteState!.httpInfo.isFetching = true;
      noteState!.httpInfo.hasError = false;
      noteState.httpInfo.errorMessage = null;

      //Note informacion
      noteState.isSavingInDB = true;
      noteState.isThereActiveNote = false;
      noteState.dbSavingMessage = '';

      //active note
      noteState.activeNote.body = null;
      noteState.activeNote.date = null;
      noteState.activeNote.title = null;
      noteState.activeNote.noteId = null;
      noteState.activeNote.imgUrls = [];

      //all notes
      noteState.allNotes = [];
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
    builder.addCase<any>(
      uploadImageThunk.fulfilled,
      (
        noteState: NoteInitialData,
        action: PayloadAction<CloudinarySuccessed>
      ) => {
        //? Http state
        noteState!.httpInfo.hasError = false;
        noteState!.httpInfo.errorMessage = null;
        noteState!.httpInfo.isFetching = false;
        noteState.dbSavingMessage = 'saving-image-successed';
        //? active note state
        if (noteState.activeNote.imgUrls.length === 0) {
          noteState.activeNote.imgUrls = [action.payload.secure_url];
        } else {
          noteState.activeNote.imgUrls = [
            action.payload.secure_url,
            ...noteState.activeNote.imgUrls
          ];
        }
        //? all notes state
        noteState.allNotes = noteState.allNotes.map((note) => {
          if (
            note.noteId === noteState.activeNote.noteId &&
            note.imgUrls.length === 0
          ) {
            return {
              ...note,
              imgUrls: [action.payload.secure_url]
            };
          } else if (
            note.noteId === noteState.activeNote.noteId &&
            note.imgUrls.length >= 1
          ) {
            return {
              ...note,
              imgUrls: [action.payload.secure_url, ...note.imgUrls]
            };
          } else {
            return note;
          }
        });
      }
    );

    builder.addCase(uploadImageThunk.rejected, (noteState) => {
      noteState!.httpInfo.hasError = true;
      noteState!.httpInfo.errorMessage = 'error';
      noteState!.httpInfo.isFetching = false;
      noteState.dbSavingMessage = '';
      noteState.dbSavingMessage = 'saving-image-failed';
    });

    builder.addCase(uploadImageThunk.pending, (noteState) => {
      noteState!.httpInfo.hasError = false;
      noteState!.httpInfo.errorMessage = null;
      noteState!.httpInfo.isFetching = true;
      noteState.dbSavingMessage = 'saving-image-in-process';
    });
  }
});

export const journalReducer = journalSlice.reducer;
export const {
  setActiveNote,
  onChangeActiveNoteBody,
  onChangeActiveNoteTitle
} = journalSlice.actions;
