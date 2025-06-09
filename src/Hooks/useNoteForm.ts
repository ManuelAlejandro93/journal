import { useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  RootState,
  onChangeActiveNoteBody,
  onChangeActiveNoteTitle,
  uploadImageThunk,
  updateSingleNoteByIDThunk
} from '@/Store';
import { Note, ChangeEvent, SubmitEvent } from '@/Interfaces';

export const useNoteForm = () => {
  //dispatch
  const dispatch = useDispatch();

  //Referencia actualizada al input que contiene las imágenes.
  const imageInputElementRef = useRef<HTMLInputElement>(null);

  //journal + auth actualizado
  const { journalReducer: journalState, authReducer: authState } = useSelector(
    (state: RootState) => state
  );

  //formattedDate
  const formattedDate = useMemo(() => {
    return new Date(journalState.activeNote?.date!).toUTCString();
  }, [journalState.activeNote?.date]);

  //controllers
  //titleChange
  const onTitleChange = (e: ChangeEvent, noteID: string): void => {
    dispatch(
      onChangeActiveNoteTitle({ newInput: e.target.value, noteID: noteID })
    );
  };
  //bodyChange
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
        note: { ...(journalState.activeNote as Note) },
        uuid: authState.data?.uuid as string
      })
    );
  };

  const fullUpdateSingleNote = async (e: SubmitEvent) => {
    e.preventDefault();
    submitImageToCloudinary();
    setNoteOnfirebases();
  };

  return {
    //General Journal State
    isFetching: journalState.httpInfo.isFetching,
    //Active Note State
    noteId: journalState.activeNote?.noteId,
    title: journalState.activeNote?.title,
    body: journalState.activeNote?.body,
    date: formattedDate,
    imgUrls: journalState.activeNote?.imgUrls,
    //form change controllers
    onBodyChange,
    onTitleChange,
    //form submit controller
    fullUpdateSingleNote,
    //image input reference
    imageInputElementRef
  };
};
