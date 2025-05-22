import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
// import { firebaseAuth } from '@/Firebase';
import { firebaseAuth } from '..//MainTools/MainTools';

const googleProvider = new GoogleAuthProvider();

export const googleLogin = async () => {
  try {
    const signInResult = await signInWithPopup(firebaseAuth, googleProvider);
    return {
      ok: true,
      name: signInResult.user.displayName,
      uuid: signInResult.user.uid,
      photo: signInResult.user.photoURL,
      email: signInResult.user.email
    };
  } catch (error) {
    throw error;
  }
};
