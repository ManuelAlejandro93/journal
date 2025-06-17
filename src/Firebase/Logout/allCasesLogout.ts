import { signOut } from 'firebase/auth';
// import { firebaseAuth } from '@/Firebase';
import { firebaseAuth } from '../MainTools/MainTools';

export const allCasesLogout = async () => {
  try {
    await signOut(firebaseAuth);
    return;
  } catch (error) {
    throw error;
  }
};
