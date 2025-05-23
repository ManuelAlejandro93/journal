import {
  createUserWithEmailAndPassword,
  updateCurrentUser
} from 'firebase/auth';
import { firebaseAuth } from '@/Firebase';
import { RegisterUserInputData } from '@/Interfaces';

import { getAuth, updateProfile, User } from 'firebase/auth';

export const regularRegister = async (userData: RegisterUserInputData) => {
  try {
    const firstRegisterResult = await createUserWithEmailAndPassword(
      firebaseAuth,
      userData.email,
      userData.password
    );
    const auth = getAuth();
    const user: User | null = auth.currentUser;

    await updateProfile(user!, {
      displayName: userData.name.trim()
    });

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
