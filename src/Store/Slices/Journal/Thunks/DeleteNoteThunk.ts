import { createAsyncThunk } from '@reduxjs/toolkit';
import { deleteSingleNoteById } from '@/Firebase';

export const deleteNoteByIdThunk = createAsyncThunk(
  'journal/delete-note-by-id-thunk',
  deleteSingleNoteById
);
