import { useDispatch, useSelector } from 'react-redux';
import {
  RootState,
  onChangeActiveNoteBody,
  onChangeActiveNoteTitle,
  uploadImageThunk
} from '@/Store';
import { Note } from '@/Interfaces';
import { useEffect, useMemo, useRef } from 'react';

import SweetAlert from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
type ChangeEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

// type SubmitEvent = React.FormEvent<HTMLFormElement>;

// type ClickEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>;

interface useNoteFormOutput extends Note {
  onTitleChange: (e: ChangeEvent, uuid: string) => void;
  onBodyChange: (e: ChangeEvent, uuid: string) => void;
  formattedDate: string;
  updatedImgUrls: string[];
  storeActiveNote: Note;
  isFetching: boolean;
  imageInputElementRef: React.RefObject<HTMLInputElement>;
  onSubmitImageToCloudinary: () => void;
}

export const useNoteForm = (): useNoteFormOutput => {
  //dispatch
  const dispatch = useDispatch();

  //image controller
  const imageInputElementRef = useRef<HTMLInputElement>(null);

  const storeActiveNote: Note = useSelector(
    (state: RootState) => state.journalReducer.activeNote
  );
  const isFetching = useSelector(
    (state: RootState) => state.journalReducer.httpInfo.isFetching as boolean
  );
  const dbSavingMessage = useSelector(
    (state: RootState) => state.journalReducer.dbSavingMessage
  );

  // updated note img urls

  const updatedImgUrls = useMemo(
    () => storeActiveNote.imgUrls.filter((x) => x),
    [storeActiveNote.imgUrls]
  );

  // formatted date.

  const formattedDate = useMemo(() => {
    console.log('use Memo');

    return new Date(storeActiveNote.date!).toUTCString();
  }, [storeActiveNote.date]);

  //controllerss
  const onTitleChange = (e: ChangeEvent, uuid: string): void => {
    dispatch(
      onChangeActiveNoteTitle({ newString: e.target.value, uuid: uuid })
    );
  };
  const onBodyChange = (e: ChangeEvent, uuid: string): void => {
    dispatch(onChangeActiveNoteBody({ newString: e.target.value, uuid: uuid }));
  };

  const onSubmitImageToCloudinary = () => {
    const formImages = imageInputElementRef.current?.files;
    if (!formImages || formImages?.length <= 0) {
      console.log('No hay imágenes.');
      return;
    } else {
      for (let i = 0; i < formImages.length; i++) {
        dispatch<any>(uploadImageThunk(formImages[i]));
      }
      imageInputElementRef.current.value = '';
    }
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
    updatedImgUrls,
    noteId: storeActiveNote.noteId,
    title: storeActiveNote.title,
    formattedDate,
    onBodyChange,
    onTitleChange,
    isFetching,
    storeActiveNote,
    imageInputElementRef,
    onSubmitImageToCloudinary
  };
};
