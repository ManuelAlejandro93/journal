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
      //Petición http
      state!.httpInfo.isFetching = false;
      state!.httpInfo.hasError = false;
      state!.httpInfo.errorMessage = null;

      //Note informacion
      state.isSavingInDB = false;
      state.dbSavingMessage = '';
      state.isThereActiveNote = state.isThereActiveNote;

      //active note
      state.activeNote.body = action.payload.body;
      state.activeNote.date = action.payload.date;
      state.activeNote.title = action.payload.title;
      state.activeNote.noteId = action.payload.noteId;
      state.activeNote.imgUrls = action.payload.imgUrls;

      //all notes
      // noteState.allNotes = noteState.allNotes;
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
      (state, action: PayloadAction<Note>) => {
        //Petición http
        state!.httpInfo.hasError = false;
        state!.httpInfo.errorMessage = null;
        state!.httpInfo.isFetching = false;

        //Note informacion
        state.isSavingInDB = false;
        state.dbSavingMessage = '';
        state.isThereActiveNote = true;

        //active note
        state.activeNote.body = action.payload.body;
        state.activeNote.date = action.payload.date;
        state.activeNote.title = action.payload.title;
        state.activeNote.noteId = action.payload.noteId;
        state.activeNote.imgUrls = action.payload.imgUrls;

        //all notes
        state.allNotes =
          !state.allNotes.length || state.allNotes.length <= 0
            ? [action.payload]
            : [action.payload, ...state.allNotes];
      }
    );
    builder.addCase(addNewEmptyNoteThunk.rejected, (state, action) => {
      //Petición http
      state!.httpInfo.hasError = true;
      state!.httpInfo.errorMessage = action.error.message as string;
      state!.httpInfo.isFetching = false;

      //Note informacion
      state.isSavingInDB = false;
      state.dbSavingMessage = '';
      state.isThereActiveNote = false;

      //active note
      state.activeNote.body = null;
      state.activeNote.date = null;
      state.activeNote.title = null;
      state.activeNote.noteId = null;
      state.activeNote.imgUrls = [];

      //all notes
      state.allNotes = [];
    });
    builder.addCase(addNewEmptyNoteThunk.pending, (state) => {
      //Petición http
      state!.httpInfo.isFetching = true;
      state!.httpInfo.hasError = false;
      state!.httpInfo.errorMessage = null;

      //Note informacion
      state.isSavingInDB = true;
      state.dbSavingMessage = '';
      state.isThereActiveNote = false;

      //active note
      state.activeNote.body = null;
      state.activeNote.date = null;
      state.activeNote.title = null;
      state.activeNote.noteId = null;
      state.activeNote.imgUrls = [];

      //all notes
      state.allNotes = [];
    });
    builder.addCase(getAllNotesThunk.fulfilled, (state, action) => {
      if (!action.payload || action.payload.length <= 0) {
        //Petición http
        state!.httpInfo.isFetching = false;
        state!.httpInfo.hasError = false;
        state!.httpInfo.errorMessage = null;

        //Note informacion
        state.isSavingInDB = false;
        state.dbSavingMessage = '';
        state.isThereActiveNote = false;

        //active note
        state.activeNote.body = null;
        state.activeNote.date = null;
        state.activeNote.title = null;
        state.activeNote.noteId = null;
        state.activeNote.imgUrls = [];

        //all notes
        state.allNotes = [];
        return;
      }

      //Petición http
      state!.httpInfo.hasError = false;
      state!.httpInfo.errorMessage = null;
      state!.httpInfo.isFetching = false;

      //Note informacion
      state.isSavingInDB = false;
      state.dbSavingMessage = '';
      state.isThereActiveNote = true;

      //active note
      state.activeNote.body = action.payload[0].body;
      state.activeNote.date = action.payload[0].date;
      state.activeNote.title = action.payload[0].title;
      state.activeNote.noteId = action.payload[0].noteId;

      //todo: Revisar despues de añadir una nueva nota
      state.activeNote.imgUrls = [];

      //todo: Revisar despues de añadir una nueva nota
      //all notes
      if (!action.payload || action.payload.length <= 0) {
        state.allNotes = [];
      } else {
        state.allNotes = [...action.payload];
      }
    });

    builder.addCase(getAllNotesThunk.rejected, (state, action) => {
      //Petición http
      state!.httpInfo.hasError = false;
      state!.httpInfo.errorMessage = action.error.message as string;
      state!.httpInfo.isFetching = false;

      //Note informacion
      state.isSavingInDB = false;
      state.dbSavingMessage = '';
      state.isThereActiveNote = false;

      //active note
      state.activeNote.body = null;
      state.activeNote.date = null;
      state.activeNote.title = null;
      state.activeNote.noteId = null;
      state.activeNote.imgUrls = [];

      //all notes
      state.allNotes = [];
    });

    builder.addCase(getAllNotesThunk.pending, (state) => {
      //Petición http
      state!.httpInfo.isFetching = true;
      state!.httpInfo.hasError = false;
      state.httpInfo.errorMessage = null;

      //Note informacion
      state.isSavingInDB = true;
      state.isThereActiveNote = false;
      state.dbSavingMessage = '';

      //active note
      state.activeNote.body = null;
      state.activeNote.date = null;
      state.activeNote.title = null;
      state.activeNote.noteId = null;
      state.activeNote.imgUrls = [];

      //all notes
      state.allNotes = [];
    });
    builder.addCase(updateSingleNoteByIDThunk.fulfilled, (state) => {
      //Petición http
      state!.httpInfo.isFetching = false;
      state!.httpInfo.hasError = false;
      state!.httpInfo.errorMessage = null;

      //Note informacion
      state.isSavingInDB = false;
      state.dbSavingMessage = 'ok-on-updating-single-note-by-id';
      state.isThereActiveNote = true;

      //active note
      // noteState.activeNote.body = noteState.activeNote.body;
      // noteState.activeNote.date = noteState.activeNote.date;
      // noteState.activeNote.title = noteState.activeNote.title;
      // noteState.activeNote.noteId = noteState.activeNote.noteId;
      // noteState.activeNote.imgUrls = noteState.activeNote.imgUrls;

      //all notes
      // noteState.allNotes = noteState.allNotes;
    });

    builder.addCase(updateSingleNoteByIDThunk.rejected, (state, action) => {
      //Petición http
      state!.httpInfo.isFetching = false;
      state!.httpInfo.hasError = true;
      state!.httpInfo.errorMessage = action.error.message as string;

      //Note informacion
      state.isSavingInDB = false;
      state.dbSavingMessage = 'error-on-updating-single-note-by-id';
      state.isThereActiveNote = true;

      //active note
      // noteState.activeNote.body = noteState.activeNote.body;
      // noteState.activeNote.date = noteState.activeNote.date;
      // noteState.activeNote.title = noteState.activeNote.title;
      // noteState.activeNote.noteId = noteState.activeNote.noteId;
      // noteState.activeNote.imgUrls = noteState.activeNote.imgUrls;

      //all notes
      // noteState.allNotes = noteState.allNotes;
    });

    builder.addCase(updateSingleNoteByIDThunk.pending, (state) => {
      //Petición http
      state!.httpInfo.isFetching = true;
      state!.httpInfo.hasError = false;
      state!.httpInfo.errorMessage = null;

      //Note informacion
      state.isSavingInDB = false;
      state.dbSavingMessage = '';
      state.isThereActiveNote = false;

      //active note
      state.activeNote.body = null;
      state.activeNote.date = null;
      state.activeNote.title = null;
      state.activeNote.noteId = null;
      state.activeNote.imgUrls = [];

      //all notes
      state.allNotes = [];
    });
    builder.addCase<any>(
      uploadImageThunk.fulfilled,
      (state: NoteInitialData, action: PayloadAction<CloudinarySuccessed>) => {
        //Petición http
        state!.httpInfo.isFetching = false;
        state!.httpInfo.hasError = false;
        state!.httpInfo.errorMessage = null;

        //Note informacion
        state.isSavingInDB = false;
        state.dbSavingMessage = '';
        state.isThereActiveNote = true;

        //active note
        // noteState.activeNote.body = noteState.activeNote.body;
        // noteState.activeNote.date = noteState.activeNote.date;
        // noteState.activeNote.title = noteState.activeNote.title;
        // noteState.activeNote.noteId = noteState.activeNote.noteId;
        // noteState.activeNote.imgUrls = noteState.activeNote.imgUrls;

        //!cosas que voy a necesitar más adelante. Start
        // !noteState.activeNote.imgUrls ||
        // noteState.activeNote.imgUrls.length === 0
        //   ? [action.payload.secure_url]
        //   : [action.payload.secure_url, ...noteState.activeNote.imgUrls];

        //all notes
        // noteState.allNotes = noteState.allNotes;
        //...................................................................................................................................................................................................................................................................................................................................

        //? all notes state
        // noteState.allNotes = noteState.allNotes.map((note) => {
        //   if (
        //     note.noteId === noteState.activeNote.noteId &&
        //     note.imgUrls.length === 0
        //   ) {
        //     return {
        //       ...note,
        //       imgUrls: [action.payload.secure_url]
        //     };
        //   } else if (
        //     note.noteId === noteState.activeNote.noteId &&
        //     note.imgUrls.length >= 1
        //   ) {
        //     return {
        //       ...note,
        //       imgUrls: [action.payload.secure_url, ...note.imgUrls]
        //     };
        //   } else {
        //     return note;
        //   }
        // });
        //!cosas que voy a necesitar más adelante. End
      }
    );

    builder.addCase(uploadImageThunk.rejected, (state, action) => {
      //Petición http
      state!.httpInfo.isFetching = false;
      state!.httpInfo.hasError = true;
      state!.httpInfo.errorMessage = action.error.message as string;

      //Note informacion
      state.isSavingInDB = false;
      state.dbSavingMessage = '';
      // noteState.isThereActiveNote = noteState.isThereActiveNote;

      //active note
      // noteState.activeNote.body = noteState.activeNote.body;
      // noteState.activeNote.date = noteState.activeNote.date;
      // noteState.activeNote.title = noteState.activeNote.title;
      // noteState.activeNote.noteId = noteState.activeNote.noteId;
      // noteState.activeNote.imgUrls = noteState.activeNote.imgUrls;

      //all notes
      // noteState.allNotes = noteState.allNotes;
    });

    builder.addCase(uploadImageThunk.pending, (state) => {
      //Petición http
      state!.httpInfo.isFetching = true;
      state!.httpInfo.hasError = false;
      state!.httpInfo.errorMessage = null;

      //Note informacion
      state.isSavingInDB = true;
      state.dbSavingMessage = '';
      // noteState.isThereActiveNote = noteState.isThereActiveNote;

      //active note
      // noteState.activeNote.body = noteState.activeNote.body;
      // noteState.activeNote.date = noteState.activeNote.date;
      // noteState.activeNote.title = noteState.activeNote.title;
      // noteState.activeNote.noteId = noteState.activeNote.noteId;
      // noteState.activeNote.imgUrls = noteState.activeNote.imgUrls;

      //all notes
      // noteState.allNotes = noteState.allNotes;
    });
  }
});

export const journalReducer = journalSlice.reducer;
export const {
  setActiveNote,
  onChangeActiveNoteBody,
  onChangeActiveNoteTitle
} = journalSlice.actions;
