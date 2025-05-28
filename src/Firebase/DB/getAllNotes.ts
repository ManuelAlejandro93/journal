import { collection, getDocs } from 'firebase/firestore/lite';
import { firebaseDB } from '@/Firebase';
import { Note } from '@/Interfaces';

export const getAllNotes = async (uuid: string): Promise<Note[]> => {
  const colectionRef = collection(firebaseDB, `${uuid}/journal/notes`);
  try {
    const docs = await getDocs(colectionRef);
    const notes: Note[] = [];

    docs.forEach((doc) => {
      const fireBaseNote = doc.data() as any;
      notes.push({ noteId: doc.id, ...fireBaseNote });
    });

    return notes;
  } catch (error) {
    throw error;
  }
};
