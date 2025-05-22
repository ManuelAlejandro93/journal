import { createSlice } from '@reduxjs/toolkit';

import { journalInitialData } from '@/Data';

const journalSlice = createSlice({
  name: 'journal-state',
  initialState: journalInitialData,
  reducers: {
    addEmptyNote() {},
    setActiveNoteNote() {},
    setNotes() {},
    setSaving() {},
    updateNote() {},
    deleteNoteById() {}
  }
});

export const journalReducer = journalSlice.reducer;
export const {
  addEmptyNote,
  setActiveNoteNote,
  setNotes,
  setSaving,
  updateNote,
  deleteNoteById
} = journalSlice.actions;
