// import { LoginValidationState } from '@/Interfaces';
import { LoginValidationState } from '../../../Interfaces/Auth/Reducer/LoginValidationState';

export const loginValidationInitialState: LoginValidationState = {
  hasEmailError: false,
  emailErrorMessage: '',
  hasPasswordError: false,
  passwordErrorMessage: '',
  isFormValid: false
};
