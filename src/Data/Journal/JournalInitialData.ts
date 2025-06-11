import { NoteInitialData } from '@/Interfaces';
export const noteInitialData: NoteInitialData = {
  httpInfo: {
    isFetching: false,
    hasError: false,
    errorMessage: null
  },
  allNotes: [],
  activeNote: {
    body: '',
    date: null,
    noteId: null,
    title: '',
    imgUrls: []
  }
};
