import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { noteInitialData } from '@/Data';
import {
  addNewEmptyNoteThunk,
  getAllNotesThunk,
  updateSingleNoteByIDThunk,
  uploadImageThunk
} from '@/Store';
import { CloudinarySuccessed, NoteInitialData, Note } from '@/Interfaces';

import SweetAlert from 'sweetalert2';

const journalSlice = createSlice({
  name: 'journal-state',
  initialState: noteInitialData,
  reducers: {
    setActiveNote(state, action: PayloadAction<Note>) {
      //Petición http
      // state!.httpInfo.isFetching = false;
      // state!.httpInfo.hasError = false;
      // state!.httpInfo.errorMessage = null;

      //Note informacion

      //active note
      state.activeNote!.body = action.payload.body;
      state.activeNote!.date = action.payload.date;
      state.activeNote!.title = action.payload.title;
      state.activeNote!.noteId = action.payload.noteId;
      state.activeNote!.imgUrls = action.payload.imgUrls;

      //all notes
      // noteState.allNotes = noteState.allNotes;
    },
    onChangeActiveNoteTitle(
      state,
      action: PayloadAction<{ newInput: string; noteID: string }>
    ) {
      //actualizo el titulo de la nota activa
      state.activeNote!.title = action.payload.newInput;
      //actualizo el titulo en el arreglo de todas las notas.
      state.allNotes = state.allNotes!.map((note) => {
        if (note.noteId === action.payload.noteID) {
          return { ...note, title: action.payload.newInput };
        } else return note;
      });
    },
    onChangeActiveNoteBody(
      state,
      action: PayloadAction<{ newString: string; noteID: string }>
    ) {
      //actualizo el body de la nota activa
      state.activeNote!.body = action.payload.newString;
      //actualizo el body en el arreglo de todas las notas.
      state.allNotes = state.allNotes!.map((note) => {
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
        state!.httpInfo.isFetching = false;
        state!.httpInfo.hasError = false;
        state!.httpInfo.errorMessage = null;

        //Note informacion

        //active note
        state.activeNote = { ...noteInitialData } as unknown as Note;
        state.activeNote!.body = action.payload.body;
        state.activeNote!.date = action.payload.date;
        state.activeNote!.title = action.payload.title;
        state.activeNote!.noteId = action.payload.noteId;
        state.activeNote!.imgUrls = action.payload.imgUrls;
        //all notes
        state.allNotes =
          !state.allNotes || state.allNotes!.length <= 0
            ? [action.payload]
            : [action.payload, ...state.allNotes];
      }
    );
    builder.addCase(addNewEmptyNoteThunk.rejected, (state, action) => {
      //Petición http
      state!.httpInfo.isFetching = false;
      state!.httpInfo.hasError = true;
      state!.httpInfo.errorMessage = action.error.message as string;

      //Note informacion

      //active note
      // state.activeNote = state.activeNote;

      //all notes
      // state.allNotes = [];
    });
    builder.addCase(addNewEmptyNoteThunk.pending, (state) => {
      //Petición http
      state!.httpInfo.isFetching = true;
      state!.httpInfo.hasError = false;
      state!.httpInfo.errorMessage = null;

      //Note informacion

      //active note
      // state.activeNote = state.activeNote;

      //all notes
      // state.allNotes = state.allNotes;
    });
    builder.addCase(getAllNotesThunk.fulfilled, (state, action) => {
      if (!action.payload || action.payload.length <= 0) {
        //Petición http
        state!.httpInfo.isFetching = false;
        state!.httpInfo.hasError = false;
        state!.httpInfo.errorMessage = null;

        //Note informacion

        //active note
        state.activeNote = null;
        //all notes
        state.allNotes = null;
        return;
      }

      //Petición http
      state!.httpInfo.isFetching = false;
      state!.httpInfo.hasError = false;
      state!.httpInfo.errorMessage = null;

      //Note informacion

      //Active Note
      state.activeNote!.body = action.payload[0].body;
      state.activeNote!.date = action.payload[0].date;
      state.activeNote!.title = action.payload[0].title;
      state.activeNote!.noteId = action.payload[0].noteId;
      state.activeNote!.imgUrls = action.payload[0].imgUrls;
      //all notes
      state.allNotes = action.payload;
    });

    builder.addCase(getAllNotesThunk.rejected, (state, action) => {
      //Petición http
      state!.httpInfo.hasError = false;
      state!.httpInfo.errorMessage = action.error.message as string;
      state!.httpInfo.isFetching = false;

      //Note informacion

      //active note
      state.activeNote = null;

      //all notes
      state.allNotes = null;
    });

    builder.addCase(getAllNotesThunk.pending, (state) => {
      //Petición http
      state!.httpInfo.isFetching = true;
      state!.httpInfo.hasError = false;
      state.httpInfo.errorMessage = null;

      //Note informacion

      //active note
      // state.activeNote = state.activeNote;

      //all notes
      // state.allNotes = state.allNotes;
    });
    builder.addCase(updateSingleNoteByIDThunk.fulfilled, (state) => {
      //Petición http
      state!.httpInfo.isFetching = false;
      state!.httpInfo.hasError = false;
      state!.httpInfo.errorMessage = null;

      //Note informacion

      //active note
      // noteState.activeNote = noteState.activeNote;

      //all notes
      // noteState.allNotes = noteState.allNotes;
      SweetAlert.fire(
        'Nota actualizada.',
        'tus notas están a salvo',
        'success'
      );
    });

    builder.addCase(updateSingleNoteByIDThunk.rejected, (state, action) => {
      //Petición http
      state!.httpInfo.isFetching = false;
      state!.httpInfo.hasError = true;
      state!.httpInfo.errorMessage = action.error.message as string;

      //Note informacion

      //active note
      // noteState.activeNote = noteState.activeNote;

      //all notes
      // noteState.allNotes = noteState.allNotes;

      SweetAlert.fire(
        'Las notas no fueron actualizadas',
        'vuelva a cargar tu nota.',
        'error'
      );
    });

    builder.addCase(updateSingleNoteByIDThunk.pending, (state) => {
      //Petición http
      state!.httpInfo.isFetching = true;
      state!.httpInfo.hasError = false;
      state!.httpInfo.errorMessage = null;

      //Note informacion

      //active note
      // state.activeNote = state.activeNote;

      //all notes
      // state.allNotes = state.allNotes;
    });
    builder.addCase<any>(
      uploadImageThunk.fulfilled,
      (state: NoteInitialData, action: PayloadAction<CloudinarySuccessed>) => {
        //Petición http
        state!.httpInfo.isFetching = false;
        state!.httpInfo.hasError = false;
        state!.httpInfo.errorMessage = null;

        //Note informacion

        //active note
        //solo quiero cambiar de la nota activa en su arreglo de imgURLS
        state.activeNote!.imgUrls =
          !state.activeNote!.imgUrls || state.activeNote!.imgUrls.length === 0
            ? [action.payload.secure_url]
            : [action.payload.secure_url, ...state.activeNote!.imgUrls];

        //all notes

        state.allNotes = state.allNotes!.map((note) => {
          if (
            note.noteId === state.activeNote!.noteId &&
            note.imgUrls.length === 0
          ) {
            return {
              ...note,
              imgUrls: [action.payload.secure_url]
            };
          } else if (
            note.noteId === state.activeNote!.noteId &&
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

    builder.addCase(uploadImageThunk.rejected, (state, action) => {
      //Petición http
      state!.httpInfo.isFetching = false;
      state!.httpInfo.hasError = true;
      state!.httpInfo.errorMessage = action.error.message as string;

      //Note informacion

      //active note
      // noteState.activeNote = noteState.activeNote;

      //all notes
      // noteState.allNotes = noteState.allNotes;
    });

    builder.addCase(uploadImageThunk.pending, (state) => {
      //Petición http
      state!.httpInfo.isFetching = true;
      state!.httpInfo.hasError = false;
      state!.httpInfo.errorMessage = null;

      //Note informacion

      //active note
      // noteState.activeNote = noteState.activeNote;

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
