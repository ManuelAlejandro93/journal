import { setDoc, doc } from 'firebase/firestore/lite';
import { firebaseDB } from '@/Firebase';
import { Note } from '@/Interfaces';

export const updateSingleNoteById = async ({
  note,
  uuid
}: {
  note: Note;
  uuid: string;
}): Promise<void | Error> => {
  const noteForFireBase = { ...note };
  delete noteForFireBase.noteId;

  const docRef = doc(firebaseDB, `${uuid}/journal/notes/${note.noteId}`);
  try {
    await setDoc(docRef, noteForFireBase, { merge: true });

    return;
  } catch (error) {
    throw error;
  }
};
