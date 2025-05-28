import { Note } from '@/Interfaces';

export type NoteInitialData = {
  httpInfo: {
    isFetching: boolean | null;
    hasError: boolean;
    errorMessage: String | null;
  };
  isSavingInDB: boolean;
  allNotes: Note[];
  activeNote: Note;
  isThereActiveNote: boolean;
  dbSavingMessage: string;
};
