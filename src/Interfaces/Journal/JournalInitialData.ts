export type NoteInitialData = {
  httpInfo: {
    isFetching: boolean;
    hasError: boolean;
    errorMessage: String | null;
  };
  isSaving: boolean;
  messageSaved: string;
  notes: string[];
  active: {
    id: null;
    tittle: string;
    body: string;
    date: null;
    imageURL: string[];
  };
};
