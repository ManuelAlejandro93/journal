//todo si es necesario
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
//todo
import { firebaseAuth } from '@/Firebase';
import { RegisterUserInputData } from '@/Interfaces';

//todo si es necesario
const googleProvider = new GoogleAuthProvider();

//todo: modificar la axn asíncrona.
export const regularRegister = async (userData: RegisterUserInputData) => {
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
