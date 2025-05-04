import { RegularValidationDataState } from '@/Interfaces';

export const RegularRegisterValidationInitialState: RegularValidationDataState =
  {
    hasNameError: false,
    nameErrorMessage: '',
    hasEmailError: false,
    emailErrorMessage: '',
    hasPasswordError: false,
    passwordErrorMessage: ''
  };
