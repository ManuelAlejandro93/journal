export type JournalInitialData = {
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
} | null;
