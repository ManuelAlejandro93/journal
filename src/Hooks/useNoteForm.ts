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

export const useNoteForm = () => {
  //dispatch
  const dispatch = useDispatch();

  //imageinput actual reference
  const imageInputElementRef = useRef<HTMLInputElement>(null);

  const storeActiveNote: Note = useSelector(
    (state: RootState) => state.journalReducer.activeNote as Note
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
    () => storeActiveNote.imgUrls.map((x) => x),
    [storeActiveNote.imgUrls]
  );

  // formatted date.

  const formattedDate = useMemo(() => {
    return new Date(storeActiveNote.date!).toUTCString();
  }, [storeActiveNote.date]);

  //controllerss
  const onTitleChange = (e: ChangeEvent, noteID: string): void => {
    dispatch(
      onChangeActiveNoteTitle({ newInput: e.target.value, noteID: noteID })
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
        note: { ...storeActiveNote },
        uuid: uuid as string
      })
    );
  };

  const fullUpdateSingleNote = async (e: SubmitEvent) => {
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
