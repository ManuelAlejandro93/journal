import { Note } from '@/Interfaces';

export type NoteInitialData = {
  httpInfo: {
    isFetching: boolean | null;
    hasError: boolean;
    errorMessage: String | null;
  };
  allNotes: Note[] | null;
  activeNote: Note | null;
  dbSavingMessage: string | null;
};
