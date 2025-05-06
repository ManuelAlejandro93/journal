import { createUserWithEmailAndPassword } from 'firebase/auth';
import { firebaseAuth } from '@/Firebase';
import { RegisterUserInputData } from '@/Interfaces';

export const regularRegister = async (userData: RegisterUserInputData) => {
  try {
    const registerResult = await createUserWithEmailAndPassword(
      firebaseAuth,
      userData.email,
      userData.password
    );
    return {
      ok: true,
      // name: registerResult.user.displayName,
      name: userData.name.trim(),
      uuid: registerResult.user.uid,
      photo: registerResult.user.photoURL,
      email: registerResult.user.email
    };
  } catch (error) {
    throw error;
  }
};
