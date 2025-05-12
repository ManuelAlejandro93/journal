import { signOut } from 'firebase/auth';
import { firebaseAuth } from '@/Firebase';

export const allCasesLogout = async () => {
  try {
    await signOut(firebaseAuth);
    return;
  } catch (error) {
    throw error;
  }
};
