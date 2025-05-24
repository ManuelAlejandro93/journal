import { doc, collection, setDoc } from 'firebase/firestore/lite';
import { firebaseDB } from '@/Firebase';

interface Note {
  noteId: string;
  title: string;
  body: string;
  date: number;
}

export const addNewEmptyNote = async (uuid: string): Promise<Note> => {
  const newDoc = doc(collection(firebaseDB, `${uuid}/journal/notes`));

  const newNoteTemp = {
    title: '',
    body: '',
    date: new Date().getTime()
  };

  try {
    await setDoc(newDoc, newNoteTemp);
    return { ...newNoteTemp, noteId: newDoc.id };
  } catch (error) {
    throw error;
  }
};
