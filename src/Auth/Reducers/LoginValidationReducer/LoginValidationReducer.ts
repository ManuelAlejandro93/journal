import {
  LoginValidationReducerAction,
  LoginValidationState
} from '@/Interfaces';

import { loginValidationInitialState } from '@/Data';

export const loginValidationReducer = (
  state: LoginValidationState = loginValidationInitialState,
  action: LoginValidationReducerAction
): LoginValidationState => {
  switch (action.type) {
    case 'invalid-email|invalid-password':
      return {
        hasEmailError: !action.payload.emailValidationResult,
        hasPasswordError: !action.payload.passwordValidationResult,
        emailErrorMessage:
          'Check your email. It must look like this "usuario123@server.com"',
        passwordErrorMessage: 'Your password must have at least 8 characters',
        isFormValid: false
      };
    case 'invalid-email|valid-password':
      return {
        hasEmailError: !action.payload.emailValidationResult,
        hasPasswordError: !action.payload.passwordValidationResult,
        emailErrorMessage:
          'Check your email. It must look like this "usuario123@server.com"',
        passwordErrorMessage: 'Good password. It is strong.',
        isFormValid: false
      };
    case 'valid-email|invalid-password':
      return {
        hasEmailError: !action.payload.emailValidationResult,
        hasPasswordError: !action.payload.passwordValidationResult,
        emailErrorMessage: 'Your email looks good, check your password',
        passwordErrorMessage: 'Your password must have at least 8 characters',
        isFormValid: false
      };
    case 'valid-email|valid-password':
      return {
        hasEmailError: !action.payload.emailValidationResult,
        hasPasswordError: !action.payload.passwordValidationResult,
        emailErrorMessage: 'Your email looks good',
        passwordErrorMessage: 'Your password looks good',
        isFormValid: true
      };
    default:
      return { ...state };
  }
};

//!Documentación:

//? hasEmailError: !action.payload.emailValidationResult,
//el validador dice si la cadena email o contraseña son adecuadas.
//lo cuál es lo contrario a tener error en la expresión evaluada.
//por lo que uno es el contrario del otro.
