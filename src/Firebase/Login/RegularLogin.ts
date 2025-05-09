import { LoginUserInputData } from '@/Interfaces';

export const regularLogin = async (loginUserInputData: LoginUserInputData) => {
  try {
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
