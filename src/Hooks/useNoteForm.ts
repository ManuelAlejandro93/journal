import { useDispatch, useSelector } from 'react-redux';
import {
  RootState,
  onChangeActiveNoteBody,
  onChangeActiveNoteTitle
} from '@/Store';
import { Note } from '@/Interfaces';
import { useEffect, useMemo } from 'react';

import SweetAlert from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
type ChangeEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

// type SubmitEvent = React.FormEvent<HTMLFormElement>;

// type ClickEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>;

interface useNoteFormOutput extends Note {
  onTitleChange: (e: ChangeEvent, uuid: string) => void;
  onBodyChange: (e: ChangeEvent, uuid: string) => void;
  formattedDate: string;
  storeActiveNote: Note;
  isFetching: boolean;
}

export const useNoteForm = (): useNoteFormOutput => {
  //dispatch
  const dispatch = useDispatch();

  //general state
  const storeActiveNote: Note = useSelector(
    (state: RootState) => state.journalReducer.activeNote
  );
  const isFetching = useSelector(
    (state: RootState) => state.journalReducer.httpInfo.isFetching as boolean
  );
  const dbSavingMessage = useSelector(
    (state: RootState) => state.journalReducer.dbSavingMessage
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

  useEffect(() => {
    if (dbSavingMessage === 'ok-on-updating-single-note-by-id') {
      SweetAlert.fire(
        'Nota actualizada.',
        'tus notas están a salvo',
        'success'
      );
    }
  }, [dbSavingMessage]);

  return {
    body: storeActiveNote.body,
    date: storeActiveNote.date,
    imgUrls: storeActiveNote.imgUrls,
    noteId: storeActiveNote.noteId,
    title: storeActiveNote.title,
    formattedDate,
    onBodyChange,
    onTitleChange,
    isFetching,
    storeActiveNote
  };
};
//
