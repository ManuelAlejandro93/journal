import { createUserWithEmailAndPassword } from 'firebase/auth';
import { firebaseAuth } from '@/Firebase';
import { RegisterUserInputData } from '@/Interfaces';

export const regularRegister = async (userData: RegisterUserInputData) => {
  try {
    const firstRegisterResult = await createUserWithEmailAndPassword(
      firebaseAuth,
      userData.email,
      userData.password
    );

    return {
      ok: true,
      name: userData.name.trim(),
      uuid: firstRegisterResult.user.uid,
      photo: firstRegisterResult.user.photoURL ?? '',
      email: firstRegisterResult.user.email
    };
  } catch (error) {
    throw error;
  }
};
