import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllNotes } from '@/Firebase';

export const getAllNotesThunk = createAsyncThunk(
  'journal/get-all-notes-thunk',
  (uuid: string) => getAllNotes(uuid)
);
