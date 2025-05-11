import { signInWithEmailAndPassword, UserCredential } from 'firebase/auth';
import { LoginUserInputData } from '@/Interfaces';
import { firebaseAuth } from '@/Firebase';

export const regularLogin = async (userLoginInputData: LoginUserInputData) => {
  try {
    const { user }: UserCredential = await signInWithEmailAndPassword(
      firebaseAuth,
      userLoginInputData.email,
      userLoginInputData.password
    );

    const { displayName, uid, photoURL, email } = user;
    return {
      ok: true,
      name: displayName,
      uuid: uid,
      photo: photoURL ?? '',
      email: email
    };
  } catch (error) {
    throw error;
  }
};
//
