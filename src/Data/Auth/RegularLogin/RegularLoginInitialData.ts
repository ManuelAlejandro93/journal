import { LoginValidationState } from '@/Interfaces';

export const loginValidationInitialState: LoginValidationState = {
  hasEmailError: false,
  emailErrorMessage: '',
  hasPasswordError: false,
  passwordErrorMessage: ''
};
