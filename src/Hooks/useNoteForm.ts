import { useDispatch, useSelector } from 'react-redux';
import {
  RootState,
  onChangeActiveNoteBody,
  onChangeActiveNoteTitle
} from '@/Store';
import { Note } from '@/Interfaces';
import { useMemo } from 'react';
type ChangeEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

// type SubmitEvent = React.FormEvent<HTMLFormElement>;

// type ClickEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>;

interface useNoteFormOutput extends Note {
  onTitleChange: (e: ChangeEvent, uuid: string) => void;
  onBodyChange: (e: ChangeEvent, uuid: string) => void;
  formattedDate: string;
  storeActiveNote: Note;
}

export const useNoteForm = (): useNoteFormOutput => {
  //dispatch
  const dispatch = useDispatch();

  //general state
  const storeActiveNote: Note = useSelector(
    (state: RootState) => state.journalReducer.activeNote
  );

  //formatted date.

  const formattedDate = useMemo(
    () => new Date(storeActiveNote.date!).toUTCString(),
    [storeActiveNote.date]
  );

  //controllerss
  const onTitleChange = (e: ChangeEvent, uuid: string): void => {
    dispatch(
      onChangeActiveNoteTitle({ newString: e.target.value, uuid: uuid })
    );
  };
  const onBodyChange = (e: ChangeEvent, uuid: string): void => {
    dispatch(onChangeActiveNoteBody({ newString: e.target.value, uuid: uuid }));
  };

  return {
    body: storeActiveNote.body,
    date: storeActiveNote.date,
    imgUrls: storeActiveNote.imgUrls,
    noteId: storeActiveNote.noteId,
    title: storeActiveNote.title,
    formattedDate,
    onBodyChange,
    onTitleChange,
    storeActiveNote
  };
};
