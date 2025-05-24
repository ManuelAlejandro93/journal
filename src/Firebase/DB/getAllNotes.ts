import { doc, collection, setDoc } from 'firebase/firestore/lite';
import { firebaseDB } from '@/Firebase';
import { Note } from '@/Interfaces';

export const getAllNotes = async (uuid: string): Promise<number> => {
  try {
    await fetch('https://rickandmortyapi.com/apiiiiiiii');
    return 666;
  } catch (error) {
    throw error;
  }
};
