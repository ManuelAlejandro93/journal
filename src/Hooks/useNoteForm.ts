import { useSelector } from 'react-redux';
import { useEffect, useMemo, useState } from 'react';
import { RootState } from '@/Store';
import { Note } from '@/Interfaces';

type ChangeEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

type SubmitEvent = React.FormEvent<HTMLFormElement>;

type ClickEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>;

export const useNote = () => {
  const storeActiveNote = useSelector(
    (state: RootState) => state.journalReducer.activeNote
  );

  const formatedDate = useMemo(
    () => new Date(storeActiveNote.date!).toUTCString(),
    [storeActiveNote]
  );

  const [activeNoteState, setActiveNoteState] = useState<Note>(storeActiveNote);

  useEffect(() => {
    setActiveNoteState(storeActiveNote);
  }, [storeActiveNote]);

  return {
    //? Estados.
    formatedDate,
    activeNoteState
    //? Controllers.
  };
};
