import { createAsyncThunk } from '@reduxjs/toolkit';
import { updateSingleNoteById } from '@/Firebase';
import { Note } from '@/Interfaces';

export const updateSingleNoteByIDThunk = createAsyncThunk(
  'journal/update-single-note-by-id-thunk',
  ({ note, uuid }: { note: Note; uuid: string }) =>
    updateSingleNoteById({ note, uuid })
);
