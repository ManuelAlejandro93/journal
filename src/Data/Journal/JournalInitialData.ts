import { NoteInitialData } from '@/Interfaces';
export const noteInitialData: NoteInitialData = {
  httpInfo: {
    isFetching: false,
    hasError: false,
    errorMessage: null
  },
  dbSavingMessage: '',
  isSavingInDB: false,
  allNotes: [],
  activeNote: {
    body: null,
    date: null,
    noteId: null,
    title: null,
    imgUrls: []
  },
  isThereActiveNote: false
};
