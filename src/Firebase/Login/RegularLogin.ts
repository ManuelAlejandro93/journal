//todo: método para checkear que el usuario existe.
import {} from 'firebase/auth';
import { LoginUserInputData } from '@/Interfaces';

export const regularLogin = async (loginUserInputData: LoginUserInputData) => {
  try {
    //todo axn asíncrona.
    return {
      ok: true,
      name: '',
      uuid: '',
      photo: '',
      email: ''
    };
  } catch (error) {
    throw error;
  }
};
