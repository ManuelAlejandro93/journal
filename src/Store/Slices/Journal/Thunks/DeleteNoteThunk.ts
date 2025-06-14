import { createAsyncThunk } from '@reduxjs/toolkit';
import { deleteSingleNoteById } from '@/Firebase';

interface Args {
  uuid: string;
  noteID: string;
}

export const deleteNoteByIdThunk = createAsyncThunk(
  'journal/delete-note-by-id-thunk',
  ({ uuid, noteID }: Args) => deleteSingleNoteById(uuid, noteID)
);
