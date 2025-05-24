import { doc, collection, setDoc } from 'firebase/firestore/lite';
import { firebaseDB } from '@/Firebase';

export const addNewEmptyNote = async (uuid: string): Promise<undefined> => {
  const newDoc = doc(collection(firebaseDB, `${uuid}/journal/notes`));

  const newNote = {
    title: '',
    body: '',
    date: new Date().getTime()
  };

  try {
    await setDoc(newDoc, newNote);
    return;
  } catch (error) {
    throw error;
  }
};
