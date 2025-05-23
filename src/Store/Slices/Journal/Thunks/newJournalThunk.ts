import { createAsyncThunk } from '@reduxjs/toolkit';
import { addNewEmptyNote } from '@/Firebase';

export const addNewEmptyNoteThunk = createAsyncThunk(
  'journal/add-new-empty-note-thunk',
  addNewEmptyNote
);
