import { useDispatch, useSelector } from 'react-redux';
import {
  RootState,
  onChangeActiveNoteBody,
  onChangeActiveNoteTitle,
  uploadImageThunk,
  updateSingleNoteByIDThunk
} from '@/Store';
import { Note } from '@/Interfaces';
import { useEffect, useMemo, useRef } from 'react';

import SweetAlert from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

import { ChangeEvent, SubmitEvent } from '@/Interfaces';

interface useNoteFormOutput extends Note {
  onTitleChange: (e: ChangeEvent, noteID: string) => void;
  onBodyChange: (e: ChangeEvent, noteID: string) => void;
  formattedDate: string;
  updatedImgUrls: string[];
  storeActiveNote: Note;
  isFetching: boolean;
  imageInputElementRef: React.RefObject<HTMLInputElement>;
  fullUpdateSingleNote: (e: SubmitEvent) => void;
}

export const useNoteForm = (): useNoteFormOutput => {
  //dispatch
  const dispatch = useDispatch();

  //imageinput actual reference
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

  const uuid = useSelector((state: RootState) => state.authReducer.data?.uuid);

  // updated note img urls

  const updatedImgUrls = useMemo(
    () => storeActiveNote.imgUrls.filter((x) => x),
    [storeActiveNote.imgUrls]
  );

  // formatted date.

  const formattedDate = useMemo(() => {
    return new Date(storeActiveNote.date!).toUTCString();
  }, [storeActiveNote.date]);

  //controllerss
  const onTitleChange = (e: ChangeEvent, noteID: string): void => {
    dispatch(
      onChangeActiveNoteTitle({ newString: e.target.value, noteID: noteID })
    );
  };
  const onBodyChange = (e: ChangeEvent, noteID: string): void => {
    dispatch(
      onChangeActiveNoteBody({ newString: e.target.value, noteID: noteID })
    );
  };

  const submitImageToCloudinary = () => {
    const formImages = imageInputElementRef.current?.files;
    if (!formImages || formImages?.length <= 0) {
      return;
    } else {
      for (let i = 0; i < formImages.length; i++) {
        dispatch<any>(uploadImageThunk(formImages[i]));
      }
      imageInputElementRef.current.value = '';
    }
  };
  const setNoteOnfirebases = () => {
    dispatch<any>(
      updateSingleNoteByIDThunk({
        note: storeActiveNote,
        uuid: uuid as string
      })
    );
  };

  const fullUpdateSingleNote = (e: SubmitEvent) => {
    e.preventDefault();
    submitImageToCloudinary();
    setNoteOnfirebases();
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
    fullUpdateSingleNote,
    isFetching,
    storeActiveNote,
    imageInputElementRef
  };
};
