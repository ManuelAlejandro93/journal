import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { RootState } from '@/Store';
import { Note } from '@/Interfaces';

type ChangeEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

type SubmitEvent = React.FormEvent<HTMLFormElement>;

type ClickEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>;

export const useNote = () => {
  const activeNote = useSelector(
    (state: RootState) => state.journalReducer.activeNote
  );

  const [title, setTitle] = useState<string>(activeNote.title!);
  const [body, setBody] = useState<string>(activeNote.body!);
  const [date] = useState<number>(activeNote.date!);
  const [imgUrls] = useState<string[]>(activeNote.imgUrls!);
  const [noteId] = useState<string>(activeNote.noteId!);

  const onTitleChange = (e: ChangeEvent): void => {
    setTitle(e.target.value);
  };

  const onBodyChange = (e: ChangeEvent): void => {
    setBody(e.target.value);
  };

  return {
    //? Estados.
    title,
    body,
    date,
    imgUrls,
    noteId,
    //? Controllers.
    onTitleChange,
    onBodyChange
  };
};
