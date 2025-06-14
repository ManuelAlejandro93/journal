import { deleteDoc, doc } from 'firebase/firestore/lite';
import { firebaseDB } from '@/Firebase';

export const deleteSingleNoteById = async ({
  noteID,
  uuid
}: {
  noteID: string;
  uuid: string;
}): Promise<string | Error> => {
  const docRef = doc(firebaseDB, `${uuid}/journal/notes/${noteID}`);
  try {
    await deleteDoc(docRef);
    return noteID;
  } catch (error) {
    throw error;
  }
};
