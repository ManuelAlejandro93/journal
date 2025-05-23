import { NoteInitialData } from '@/Interfaces';
export const noteInitialData: NoteInitialData = {
  httpInfo: {
    isFetching: false,
    hasError: false,
    errorMessage: null
  },
  isSaving: false,
  messageSaved: '',
  notes: [],
  active: {
    id: null,
    tittle: '',
    body: '',
    date: null,
    imageURL: []
  }
};
